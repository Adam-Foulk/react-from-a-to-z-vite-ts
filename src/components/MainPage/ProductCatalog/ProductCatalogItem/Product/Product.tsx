import { FC } from "react";
import MyButton from "components/UI/MyButton/MyButton";
import { TProduct } from "types/types";

type ProductProps = {
  product: TProduct;
  onClick: (id: number) => void;
  className: string;
};

const Product: FC<ProductProps> = ({ product, onClick, className }) => {
  const onClickHandler = () => {
    onClick(product.id);
  };

  return (
    <MyButton
      className={className}
      title={product.title}
      onClick={onClickHandler}
    >
      {product.icon ? <img src={product.icon} /> : ""}
      <p>{product.title}</p>
    </MyButton>
  );
};

export default Product;
