import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

import "./FormAuth.css"

const FormAuth = (props) => {
    return (
        <form {...props} action="" className="formAuth">
            <MyInput className="field login" type="text" placeholder="login..."/>
            <MyInput className="field pass" type="text" placeholder="password..."/>
            <MyButton className="btn action">login</MyButton>
        </form>
    );
};

export default FormAuth;