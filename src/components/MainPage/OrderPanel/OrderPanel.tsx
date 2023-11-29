import { FC } from "react";
import styles from "./OrderPanel.module.less";

import orderHistory from "res/order-pannel/order-history.svg";
import productCatalog from "res/order-pannel/product-catalog.svg";
import productAdd from "res/order-pannel/product-add.svg";
import productQuantity from "res/order-pannel/product-quantity.svg";
import productQuantityIncrease from "res/order-pannel/product-quantity +1.svg";
import productQuantityDecrease from "res/order-pannel/product-quantity -1.svg";
import MyButton from "components/UI/MyButton/MyButton";
import classNames from "classnames";
import { useMainPage } from "../store";
import { useInputNumber } from "components/UI/InputNumberFormOld/store";

type OrderPanelProps = {
  className?: string;
};

const OrderPanel: FC<OrderPanelProps> = (className) => {
  const isActiveProductCatalog = useMainPage(
    (state) => state.isActiveProductCatalog
  );

  const setIsActiveProductCatalog = useMainPage(
    (state) => state.setIsActiveProductCatalog
  );

  const setDisplayInputNumberForm = useInputNumber((state) => state.display);
  const addProduct = useInputNumber((state) => addProduct);
  const setSetNumber = useInputNumber((state) => setSetNumber);

  const productCatalogHandler = () => {
    setIsActiveProductCatalog(!isActiveProductCatalog);
  };

  const productAddHandler = () => {
    setSetNumber(addProduct);
    setDisplayInputNumberForm(true);
  };
  const setProductQuantity = () => {};
  const increaseProductQuantity = () => {};
  const decreaseProductQuantity = () => {};

  return (
    <div className={classNames(className, styles.bottomMiddle)}>
      <MyButton onClick={() => {}}>
        <img src={orderHistory} alt="orderHistory" />
      </MyButton>
      <MyButton
        className={isActiveProductCatalog ? styles.active : ""}
        onClick={productCatalogHandler}
      >
        <img src={productCatalog} alt="productCatalog" />
      </MyButton>
      <MyButton onClick={productAddHandler}>
        <img src={productAdd} alt="productAdd" />
      </MyButton>
      <MyButton onClick={setProductQuantity}>
        <img src={productQuantity} alt="productQuantity" />
      </MyButton>
      <MyButton onClick={increaseProductQuantity}>
        <img src={productQuantityIncrease} alt="productQuantityIncrease" />
      </MyButton>
      <MyButton onClick={decreaseProductQuantity}>
        <img src={productQuantityDecrease} alt="productQuantityDecrease" />
      </MyButton>
    </div>
  );
};

export default OrderPanel;
