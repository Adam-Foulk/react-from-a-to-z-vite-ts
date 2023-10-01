import styles from './MyButton.module.less'
import {FC} from 'react'
import classnames from 'classnames';

type MyButtonProps = {
    className?: string
}

const MyButton: FC<MyButtonProps> = 
    (
        className, 
        children,
        ...props
    ) => {
    return (
        <button {...props} className = {classnames(className, styles.myBtn)}>
            {children}
        </button>
    );
};

export default MyButton;