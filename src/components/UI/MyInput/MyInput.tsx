import classes from './MyInput.module.less'

const MyInput = ({className, ...props}) => {
    return (
        <input {...props} className={`${className} ${classes.myInput}`}/>
    );
};

export default MyInput;