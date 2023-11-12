import styles from './ListButtons.module.less'
import MyButton from '../MyButton/MyButton';
import classnames from 'classnames'

import arrowUp from "../../../res/tabs-pannel/arrow-up.svg"
import arrowDown from "../../../res/tabs-pannel/arrow-down.svg"

const ListButtons = ({onListUp, onListDown,listClassName, buttonClassName}) => {
    return (
        <div className={classnames(styles.listButtons, listClassName)}>
            <MyButton onClick={onListUp} className={classnames(styles.button, buttonClassName)}><img className={styles.img} src={arrowUp}/></MyButton>
            <MyButton onClick={onListDown} className={classnames(styles.button, buttonClassName)}><img className={styles.img} src={arrowDown}/></MyButton>
        </div>
    );
};

export default ListButtons;