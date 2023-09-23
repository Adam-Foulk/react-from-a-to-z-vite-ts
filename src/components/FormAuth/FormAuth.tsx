import {useState} from 'react'
import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

import classes from "./FormAuth.module.less"
const FormAuth = (...props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const auth = (event) => {
        event.preventDefault();
        console.log(login);
        console.log(password);
        setLogin('');
        setPassword('');
    }
    
    return (
        <form {...props} action="" className = {classes.formAuth}>
            <MyInput 
                value={login} 
                onChange= {(event) => setLogin(event.target.value)}
                className={classes.login} 
                type="text" 
                placeholder="login..."
            />
            <MyInput
                value={password} 
                onChange= {(event) => setPassword(event.target.value)}
                className={classes.pass} 
                type="password" 
                placeholder="password..."
            />
            <MyButton 
                onClick={auth}
                className={classes.action}
            >login</MyButton>
        </form>
    );
};

export default FormAuth;
