import styles from './ActionPanel.module.less'
import MyButton from '../MyButton/MyButton';
import classnames from 'classnames'
import { FC } from 'react';

export const enum ActionPanelDirection {
    vertical = 'vertical',
    horizontal = 'horizontal'
}

type ActionPanelProps = {
    direction: ActionPanelDirection,
    cancelHandler: () => void,
    clearHandler: () => void,
    enterHandler: () => void
}


const ActionPanel: FC<ActionPanelProps> = ({direction, cancelHandler, clearHandler, enterHandler}) => {
    return (
        <div className={classnames(styles.actionPanel, (direction == ActionPanelDirection.horizontal && styles.actionPanelHorizontal))}>
            <MyButton onClick={cancelHandler} className={styles.cancel}>cancel</MyButton>
            {clearHandler && <MyButton onClick={clearHandler} className={styles.clear}>clear</MyButton>}
            <MyButton onClick={enterHandler} className={styles.enter}>enter</MyButton>
        </div>
    );
};

export default ActionPanel;