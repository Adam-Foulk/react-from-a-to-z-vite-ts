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

const MainPage = () => {
  const [bonusCard, setBonusCard] = useState<TBonusCard>({
    id: 123,
    name: "Adam",
    phoneNumber: "0966293123",
    bonuses: 3.1,
  });
  const [hint, setHint] = useState<string>("welcome to the station!");

  const [orders, setOrders] = useState<TOrder[]>([{ title: 0, content: [] }]);

  const [activeOrderNumber, setActiveOrderNumber] =
    useState<TActiveOrderNumber>(0);
  const [activeItemNumber, setActiveItemNumber] =
    useState<TActiveItemNumber>(0);
  const [isActiveProductCatalog, setisActiveProductCatalog] = useState(false);

  const addProduct = (code: number | undefined) => {
    const newProduct = products.find((product) => product.id === code);
    if (!newProduct) {
      console.log(`product with code: ${code} not founded!`);
      return;
    }

    const newOrder: TOrder = orders[activeOrderNumber];
    let newActiveItemNumber: TActiveItemNumber = activeItemNumber;
    const newOrders: TOrder[] = [...orders];

    const foundedProductId = newOrder.content.findIndex(
      (product) => product.id === newProduct.id
    );

    if (foundedProductId >= 0) {
      const foundedProduct = newOrder.content[foundedProductId];

      foundedProduct.quantity++;
      foundedProduct.sum =
        (foundedProduct.price - foundedProduct.discount) *
        foundedProduct.quantity;

      newActiveItemNumber = foundedProductId;
    } else {
      newOrder.content.push({
        ...newProduct,
        quantity: 1,
        sum: newProduct.price - newProduct.discount,
      });
      newActiveItemNumber = newOrder.content.length - 1;
    }

    let totalSum: number = 0;
    for (const product of newOrder.content) {
      totalSum += product.sum;
    }
    newOrder.title = totalSum;

    newOrders[activeOrderNumber] = newOrder;

    setOrders(newOrders);
    setActiveItemNumber(newActiveItemNumber);
  };

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
          {/* <FillingPlaces /> */}
          <ProductCatalog addProduct={addProduct} />
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
