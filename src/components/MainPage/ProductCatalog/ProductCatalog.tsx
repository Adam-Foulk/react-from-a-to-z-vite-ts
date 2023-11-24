import styles from "./ProductCatalog.module.less";
import { FC, useEffect, useState } from "react";

import { EActionVariant, TProductCatalog } from "types/types";
import ProductCatalogItem from "./ProductCatalogItem/ProductCatalogItem";

import Action from "./ProductCatalogItem/Action/Action";
import { TCategory } from "./ProductCatalogItem/ProductCategory/Category";
import { TProduct } from "./ProductCatalogItem/Product/Product";
import { Products } from "types/mock";

type TProductCatalogProps = {
  addProduct: (id: number) => void;
};

const ProductCatalog: FC<TProductCatalogProps> = ({ addProduct }) => {
  const [productPage, setProductPage] = useState<TProductCatalog>(Products);
  const [productPageHistory, setProductPageHistory] = useState<
    TProductCatalog[]
  >([productPage]);

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);

  useEffect(() => {
    currentPageNumber > 0
      ? setProductPage(productPageHistory[currentPageNumber])
      : setProductPage(Products);
    setProductPageHistory(productPageHistory.slice(0, currentPageNumber + 1));
  }, [currentPageNumber]);

  const setProductPageHandler = (products: TProductCatalog) => {
    setProductPageHistory([...productPageHistory, products]);
    setCurrentPageNumber(currentPageNumber + 1);
    setProductPage(products);
  };

  const turnPreview = () => {
    if (currentPageNumber > 0) {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };

  const turnHome = () => {
    setCurrentPageNumber(0);
  };

  return (
    <div className={styles.productCatalog}>
      {productPage.map((product: TCategory | TProduct, index: number) => (
        <>
          <ProductCatalogItem
            key={index}
            child={product}
            addProductCode={addProduct}
            setProductPage={setProductPageHandler}
          />
        </>
      ))}
      {currentPageNumber > 0 ? (
        <>
          <Action variant={EActionVariant.preview} onClick={turnPreview} />
          <Action variant={EActionVariant.home} onClick={turnHome} />
        </>
      ) : null}
    </div>
  );
};

export default ProductCatalog;
