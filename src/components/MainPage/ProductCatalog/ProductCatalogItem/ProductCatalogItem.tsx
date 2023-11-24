import styles from "./ProductCatalogItem.module.less";
import MyButton from "components/UI/MyButton/MyButton";
import classNames from "classnames";
import { FC } from "react";
import Category, { TCategory } from "./ProductCategory/Category";
import Product from "./Product/Product";
import { TProduct, TProductCatalog } from "types/types";

type ProductCatalogItemProps = {
  child: TCategory | TProduct;
  setProductPage: (products: TProductCatalog) => void;
  addProductCode: (id: number) => void;
};

const ProductCatalogItem: FC<ProductCatalogItemProps> = ({
  child,
  setProductPage,
  addProductCode,
}) => {
  if ((child as TCategory).child) {
    return (
      <Category
        category={child as TCategory}
        onClick={() => {
          setProductPage((child as TCategory).child);
        }}
      />
    );
  } else {
    return (
      <Product
        product={child as TProduct}
        className={styles.product}
        onClick={addProductCode}
      />
    );
  }
};

export default ProductCatalogItem;
