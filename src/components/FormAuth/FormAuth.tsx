import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

import classes from "./FormAuth module.css"
import "./FormAuth.css"

const FormAuth = (props) => {
    console.log(classes)
    return (
        // <form {...props} action="" className="formAuth">
        //     <MyInput className="field login" type="text" placeholder="login..."/>
        //     <MyInput className="field pass" type="text" placeholder="password..."/>
        //     <MyButton className="btn action">login</MyButton>
        // </form>
        <form {...props} action="" className={classes.formAuth}>
            <MyInput className={classes.field, classes.login} type="text" placeholder="login..."/>
            <MyInput className={classes.field, classes.pass} type="text" placeholder="password..."/>
            <MyButton className={classes.btn, classes.action}>login</MyButton>
        </form>
    );
};

export default FormAuth;
