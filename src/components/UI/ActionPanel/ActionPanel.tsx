import styles from './ActionPanel.module.less'
import MyButton from '../MyButton/MyButton';
import classnames from 'classnames'

const ActionPanel = ({direction, cancelHandler, clearHandler, enterHandler}) => {
    return (
        <div className={classnames(styles.actionPanel, (direction == 'horizontal' && styles.actionPanelHorizontal))}>
            <MyButton onClick={cancelHandler} className={styles.cancel}>cancel</MyButton>
            {clearHandler && <MyButton onClick={clearHandler} className={styles.clear}>clear</MyButton>}
            <MyButton onClick={enterHandler} className={styles.enter}>enter</MyButton>
        </div>
    );
};

export default ActionPanel;