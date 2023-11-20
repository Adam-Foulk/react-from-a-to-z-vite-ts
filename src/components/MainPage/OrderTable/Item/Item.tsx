import { TActiveItemNumber, TOrderItem } from "types/types";
import styles from "./Item.module.less";
import { FC } from "react";

type ItemProps = Readonly<{
  isActive: boolean;
  setActive: (active: TActiveItemNumber) => void;
  dataIndex: TActiveItemNumber;
  item: TOrderItem;
}>;

const Item: FC<ItemProps> = ({ isActive, setActive, dataIndex, item }) => {
  return (
    <tr
      className={isActive ? styles.active : ""}
      onClick={() => {
        setActive(dataIndex);
      }}
    >
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.remainder}</td>
      <td>{item.quantity}</td>
      <td>{item.price}</td>
      <td>{item.discount}</td>
      <td>{item.sum}</td>
    </tr>
  );
};

export default Item;
