import classes from './MyButton.module.less'
import classNames from 'classnames';

const MyButton = ({children, btnClasses,  ...props}) => {
    return (
        <button {...props} className={classNames([classes.myBtn, btnClasses])}>
            {children}
        </button>
    );
};

export default MyButton;