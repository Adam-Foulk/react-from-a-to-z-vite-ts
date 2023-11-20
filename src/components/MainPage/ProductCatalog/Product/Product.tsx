import styles from "./Product.module.less";
import MyButton from "components/UI/MyButton/MyButton";
import classNames from "classnames";
import { FC } from "react";
import { TProductCatalog, TProductCatalogItem } from "types/types";

type TCategory = {
  title: string;
  icon?: string;
  className?: string;
  childs: TCategory[] | TProduct[];
  // setProductPage: (products: TCategory[] | TProduct[]) => void;
};
type TProduct = {
  title: string;
  id: number;
  // addProduct: (id: number) => void;
};
type TTechBtn = {
  title: string;
  icon?: string;
  className: string;
  // onClick: () => void;
};

type TProductProps = {
  product: TProductCatalogItem;
  // product: TCategory | TProduct | TTechBtn;
  setProductPage?: (products: TProductCatalog) => void;
  addProductCode?: (id: number) => void;
  onClick?: () => void;
};

const Product: FC<TProductProps> = ({
  product,
  setProductPage,
  addProductCode,
  onClick,
}) => {
  const onClickHandler = () => {
    product.childs && setProductPage
      ? setProductPage(product.childs)
      : product.id && addProductCode
      ? addProductCode(product.id)
      : onClick
      ? onClick()
      : console.log("something went wrong");
  };

  return (
    <MyButton
      className={classNames(product.className, styles.product)}
      title={product.title}
      onClick={onClickHandler}
    >
      {product.icon ? <img src={product.icon} /> : ""}
      <p>{product.title}</p>
    </MyButton>
  );
};

export default Product;
