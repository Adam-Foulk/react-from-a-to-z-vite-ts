import styles from "./OrderTable.module.less"
import Item from "./Item/Item";
import { useEffect } from "react";

const OrderTable = ({orders, activeItem, setActiveItem, active}) => {
    
    let totalDiscount = 0;
    orders[active].content.forEach(item => {
        totalDiscount += item.discount
    });
    let totalSum = 0;
    orders[active].content.forEach(item => {
        totalSum += item.sum
    });
    let totalPrice = 0;
    orders[active].content.forEach(item => {
        totalPrice += item.price
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

                {orders[active].content.map((item, dataIndex) => (
                    <Item 
                        item={item}
                        active={activeItem === dataIndex? true : false}
                        setActive={setActiveItem}
                        dataIndex={dataIndex}
                    />
                ))}

            </tbody>
            <tfoot>
                <tr>
                    <th>{active+1} / {orders.length}</th>
                    <th></th>
                    <th></th>
                    <th>{orders[active].content.length}</th>
                    <th>{totalPrice}</th>
                    <th>{totalDiscount}</th>
                    <th>{totalSum}</th>
                </tr>
            </tfoot>
        </table>
    );
};

export default OrderTable;