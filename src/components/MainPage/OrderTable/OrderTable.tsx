import styles from "./OrderTable.module.less";
import Item from "./Item/Item";
import { TActiveItemNumber, TActiveOrderNumber, TOrder } from "types/types";
import { FC } from "react";

type OrderTableProps = Readonly<{
  orders: TOrder[];
  activeItem: TActiveItemNumber;
  setActiveItem: (newActiveItem: TActiveItemNumber) => void;
  activeOrder: TActiveOrderNumber;
}>;

const OrderTable: FC<OrderTableProps> = ({
  orders,
  activeItem,
  setActiveItem,
  activeOrder,
}) => {
  let totalDiscount = 0;
  orders[activeOrder].content.forEach((item) => {
    totalDiscount += item.discount;
  });
  let totalSum = 0;
  orders[activeOrder].content.forEach((item) => {
    totalSum += item.sum;
  });
  let totalPrice = 0;
  orders[activeOrder].content.forEach((item) => {
    totalPrice += item.price;
  });

  return (
    <table className={styles.table}>
      <tbody>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>rem.</th>
          <th>quant.</th>
          <th>price</th>
          <th>disc.</th>
          <th>sum</th>
        </tr>

        {orders[activeOrder].content.map((item, dataIndex) => (
          <Item
            item={item}
            isActive={activeItem === dataIndex ? true : false}
            setActive={setActiveItem}
            dataIndex={dataIndex}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>
            {activeOrder + 1} / {orders.length}
          </th>
          <th></th>
          <th></th>
          <th>{orders[activeOrder].content.length}</th>
          <th>{totalPrice}</th>
          <th>{totalDiscount}</th>
          <th>{totalSum}</th>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderTable;
