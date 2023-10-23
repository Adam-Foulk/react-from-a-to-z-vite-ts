import styles from "./Tab.module.less"
import MyButton from 'components/UI/MyButton/MyButton'
import classNames from 'classnames'

import active from "res/tabs-pannel/active.svg"
import background from "res/tabs-pannel/background.svg"
import create from "res/tabs-pannel/add.svg"

const Tab = ({id, activeTabID, price, selectTab, removeTab, onClick}) => {
    return (<>{
        activeTabID === id?(
            <MyButton className={classNames(styles.tab, styles.active)}
                onClick={() => {removeTab(id)}}
            >
                <img src={active} alt=""/>
                <p>{price}</p>
            </MyButton>
        ): price !== undefined?(
            <MyButton 
                className={classNames(styles.tab, styles.background)}
                onClick={() => {selectTab(id)}}
            >
                <img src={background} alt=""/>
                <p>{price}</p>
            </MyButton>
        ):(
            <MyButton 
                className={styles.createTab}
                onClick={onClick()}
            >
                <img src={create} alt=""/>
            </MyButton>
    )}</>)
};

export default Tab;