import classNames from 'classnames';
import classes from './MyInput.module.less'

const MyInput = (props) => {
    return (
        <input {...props} className={classNames([classes.myInput, props.fldClasses])} />
    );
};

export default MyInput;