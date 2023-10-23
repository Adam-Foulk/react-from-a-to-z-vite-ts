import styles from "./TabsPannel.module.less"
import {useEffect, useState} from 'react'
import Tab from "./Tab/Tab";

const TabsPannel = () => {
    
    const [tabs, setTabs] = useState([
        {id: 0,price: 0},
        {id: 1,price: 0},
        {id: 2,price: 0},
    ])

    const [activeTabID, setActiveTabID] = useState(0)

    const addTab = () => {
        setActiveTabID(tabs.length)
        setTabs([...tabs, {id: activeTabID, price: 0}])
    }

    const selectTab = (tabId) => {
        setActiveTabID(tabId)
        setTabs([...tabs, {id: tabId, price: 0}])
    }
    const removeTab = (tabId) => {
        setTabs([...tabs.slice(0, tabId), ...tabs.slice(tabId+1, tabs.length-1)])
        setActiveTabID(tabId - 1)
    }

    // useEffect(() => {
    //     if(activeTabID === tabs.length)
    //         setTabs([...tabs, {price: 0}])

    // },[activeTabID])

    return (
        <div className={styles.tabsPannel}>
            {
                tabs.map((tab) => {
                    return (
                        <Tab
                            id={tab.id}
                            activeTabID={activeTabID}
                            price={tab.price}
                            selectTab={selectTab}
                            removeTab={removeTab}
                        />
                    )
            })}
            <Tab
                onClick={addTab}
            />
            {/* <MyButton className={classNames(styles.tab, styles.active)}>
                <img src={active} alt=""/>
                <p>392.00</p>
            </MyButton> */}
            {/* <MyButton className={styles.tab}>
                <img src={background} alt=""/>
                <p>522.55</p>
            </MyButton>
            <MyButton className={styles.createTab}>
                <img src={create} alt=""/>
            </MyButton> */}
        </div>
    );
};

export default TabsPannel;
