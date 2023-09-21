import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

import classes from "./FormAuth.css"
import "./FormAuth.css"

const FormAuth = (props) => {
    return (
        <form {...props} action="" className="form-auth">
            <MyInput fldClasses="field login" type="text" placeholder="login..."/>
            <MyInput fldClasses="field pass" type="text" placeholder="password..."/>
            <MyButton btnClasses="btn action">login</MyButton>
        </form>
    );
};

export default FormAuth;
