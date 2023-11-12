import Tab from "./Tab/Tab";
import styles from "./Tabs.module.less"

function Tabs({ orders, setOrders, active, setActive}) {

    const createTab = () => {
        if(orders.length < 6) {
            setOrders([...orders, {title: 0, content: [
            ]}])
            setActive(orders.length)
        }
    }
    
    const removeTab = (dataIndex) => {
        const trashItem = orders.at(dataIndex)
        orders.length <= 1
        ? setOrders([
            {title: '0', content: []
            }
        ])
        : setOrders(
            orders.filter((order) => order !== trashItem)
        )
        
        dataIndex > 0
        ? setActive(dataIndex-1)
        : setActive(dataIndex)
    }

    return (
        <div className={styles.tabs}>
            {orders.map((n, i) => (
                <Tab
                    isActive={i === active ? true : false}
                    dataIndex={i}
                    title={n.title}
                    setActive={setActive}
                    removeTab={removeTab}
                />
            ))}
            <Tab
                createTab={createTab}
            />
        </div>
    );
}

export default Tabs