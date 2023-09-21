import classes from './MyInput.module.less'

const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput}/>
    );
};

export default MyInput;