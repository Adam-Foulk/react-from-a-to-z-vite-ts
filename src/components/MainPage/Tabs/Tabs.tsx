import MyButton from "components/UI/MyButton/MyButton";
import Tab from "./Tab/Tab";
import styles from "./Tabs.module.less"

function Tabs({ items, setItems, active, setActive}) {

    const createTab = () => {
        setItems([...items, {title: 0, content: null}])
        setActive(items.length)
    }
    
    const removeTab = (dataIndex) => {
        const trashItem = items.at(dataIndex)
        setItems(
            items.filter((item) => item !== trashItem)
        )
    }

    return (
        <div className={styles.tabs}>
            {items.map((n, i) => (
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