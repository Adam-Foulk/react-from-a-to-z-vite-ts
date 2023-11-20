import styles from "./Product.module.less";
import MyButton from "components/UI/MyButton/MyButton";
import classNames from "classnames";
import { TProductCatalogItem } from "types/types";
import { FC } from "react";

const Product = ({
  className,
  icon,
  title,
  childs,
  id,
  addProductCode,
  setProductPage,
  onClick,
}) => {
  const onClickHandler = () => {
    childs ? setProductPage(childs) : id ? addProductCode(id) : onClick();
  };

  return (
    <MyButton
      className={classNames(className, styles.product)}
      title={title}
      onClick={onClickHandler}
    >
      {icon ? <img src={icon} /> : ""}
      <p>{title}</p>
    </MyButton>
  );
};

export default Product;
