import styles from './Item.module.less'
const Item = ({active, setActive, dataIndex, item}) => {
    return (
        <tr 
            className={active? styles.active : ''}
            onClick={() => {setActive(dataIndex)}}
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