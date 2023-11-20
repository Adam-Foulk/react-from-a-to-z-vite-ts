import Tab from "./Tab/Tab";
import styles from "./Tabs.module.less";

function Tabs({ orders, setOrders, activeOrderNumber, setActiveOrderNumber }) {
  const createTab = () => {
    if (orders.length < 6) {
      setOrders([...orders, { title: 0, content: [] }]);
      setActiveOrderNumber(orders.length);
    }
  };

  const removeTab = (dataIndex) => {
    const trashItem = orders.at(dataIndex);
    orders.length <= 1
      ? setOrders([{ title: "0", content: [] }])
      : setOrders(orders.filter((order) => order !== trashItem));

    dataIndex > 0
      ? setActiveOrderNumber(dataIndex - 1)
      : setActiveOrderNumber(dataIndex);
  };

  return (
    <div className={styles.tabs}>
      {orders.map((n, i) => (
        <Tab
          isActive={i === activeOrderNumber ? true : false}
          dataIndex={i}
          title={n.title}
          setActiveOrderNumber={setActiveOrderNumber}
          removeTab={removeTab}
        />
      ))}
      <Tab createTab={createTab} />
    </div>
  );
}

export default Tabs;
