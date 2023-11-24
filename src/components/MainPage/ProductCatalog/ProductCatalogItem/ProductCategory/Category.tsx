import React, { FC } from "react";
import styles from "./Category.module.less";
import MyButton from "components/UI/MyButton/MyButton";
import classNames from "classnames";
import { TCategory, TProduct } from "types/types";

type CategoryProps = {
  category: TCategory;
  onClick: (products: (TCategory | TProduct)[]) => void;
  className?: string;
};

const Category: FC<CategoryProps> = ({ category, onClick, className }) => {
  const onClickHandler = () => {
    onClick(category.child);
  };

  return (
    <MyButton
      className={classNames(
        styles.product,
        className,
        styles[category.variant ? category.variant : ""]
      )}
      title={category.title}
      onClick={onClickHandler}
    >
      {category.icon ? <img src={category.icon} /> : ""}
      <p>{category.title}</p>
    </MyButton>
  );
};

export default Category;
