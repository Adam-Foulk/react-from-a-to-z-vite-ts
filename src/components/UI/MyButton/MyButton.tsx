import classes from './MyButton.module.less'
import {FC} from 'react'
import classnames from 'classnames';

type MyButtonProps = {
    className?: Object
}

const MyButton: FC<MyButtonProps> = 
    (
        className, 
        children,
        ...props
    ) => {
    // className = `${className} ${classes.myBtn}`
    className = {classnames(className, classes.myBtn)}
    return (
        <button {...props} className = {className}>
            {children}
        </button>
    );
};

export default MyButton;