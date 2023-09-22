import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

import classes from "./FormAuth.module.less"
const FormAuth = (...props) => {
    return (
        <form {...props} action="" className = {classes.formAuth}>
            <MyInput className={classes.login} type="text" placeholder="login..."/>
            <MyInput className={classes.pass} type="text" placeholder="password..."/>
            <MyButton className={classes.action}>login</MyButton>
        </form>
    );
};

export default FormAuth;
