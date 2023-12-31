import { useState } from "react";
import styles from "./MainPage.module.less";
import {
  TActiveItemNumber,
  TActiveOrderNumber,
  TBonusCard,
  TOrder,
} from "types/types";

import BonusCardInfo from "./BonusCardInfo/BonusCardInfo";
import Settings from "./Settings/Settings";
import News from "./News/News";
import Hint from "./Hint/Hint";
import FillingPlaces from "./FillingPlaces/FillingPlaces";
import ProductCatalog from "./ProductCatalog/ProductCatalog";

import ListButtons from "components/UI/ListButtons/ListButtons";
import Tabs from "./Tabs/Tabs";
import OrderTable from "./OrderTable/OrderTable";
import { products } from "types/mock";
import OrderPanel from "./OrderPanel/OrderPanel";
import { useMainPage } from "./store";
import InputNumberForm from "components/UI/InputNumberForm/InputNumberForm";

const MainPage = () => {
  const bonusCard = useMainPage((state) => state.bonusCard);
  const setBonusCard = useMainPage((state) => state.setBonusCard);
  const hint = useMainPage((state) => state.hint);
  const setHhint = useMainPage((state) => state.setHhint);
  const orders = useMainPage((state) => state.orders);
  const setOrders = useMainPage((state) => state.setOrders);

  const activeOrderNumber = useMainPage((state) => state.activeOrderNumber);
  const setActiveOrderNumber = useMainPage(
    (state) => state.setActiveOrderNumber
  );
  const activeItemNumber = useMainPage((state) => state.activeItemNumber);
  const setActiveItemNumber = useMainPage((state) => state.setActiveItemNumber);
  const isActiveProductCatalog = useMainPage(
    (state) => state.isActiveProductCatalog
  );

  const addProduct = useMainPage((state) => state.addProduct);

  const onListUp = () => {
    activeItemNumber > 0 ? setActiveItemNumber(activeItemNumber - 1) : null;
  };
  const onListDown = () => {
    activeItemNumber < orders[activeOrderNumber].content.length - 1
      ? setActiveItemNumber(activeItemNumber + 1)
      : null;
  };

  return (
    <div className={styles.content}>
      <InputNumberForm />
      <div className={styles.main}>
        <div className={styles.topLeft}>
          <Settings />
          <News />
          <main>
            <BonusCardInfo
              bonusCard={bonusCard}
              setBonusCard={setBonusCard}
            ></BonusCardInfo>
            <Hint>{hint}</Hint>
          </main>
        </div>
        <div className={styles.topRight}>
          {isActiveProductCatalog ? (
            <ProductCatalog addProduct={addProduct} />
          ) : (
            <FillingPlaces />
          )}
        </div>
        <div className={styles.bottomLeft}>
          <header>
            <Tabs
              orders={orders}
              setOrders={setOrders}
              activeOrderNumber={activeOrderNumber}
              setActiveOrderNumber={setActiveOrderNumber}
            />
            <ListButtons onListUp={onListUp} onListDown={onListDown} />
          </header>
          <main>
            <OrderTable
              orders={orders}
              activeOrder={activeOrderNumber}
              activeItem={activeItemNumber}
              setActiveItem={setActiveItemNumber}
            />
          </main>
        </div>
        <OrderPanel className={styles.bottomMiddle} />
      </div>
    </div>
  );
};

export default MainPage;
