import classes from './MyButton.module.less'

const MyButton = ({children, className, ...props}) => {
    className = `${className} ${classes.myBtn}`
    return (
        <button {...props} className = {className}>
            {children}
        </button>
    );
};

export default MyButton;