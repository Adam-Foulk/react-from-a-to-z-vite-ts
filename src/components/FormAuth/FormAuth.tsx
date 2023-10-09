import {useState} from 'react'
import MyButton from "../UI/MyButton/MyButton"
import MyInput from "../UI/MyInput/MyInput"

import InputNumberForm from '../InputNumberForm/InputNumberForm'
import InputUserForm from '../InputUserForm/InputUserForm'

import classes from "./FormAuth.module.less"
const FormAuth = (props) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [displayNumberForm, setDisplayNumberForm] = useState(false)
    const [displayUserForm, setDisplayUserForm] = useState(false)

    const auth = (event) => {
        event.preventDefault();
        console.log(login);
        console.log(password);
        setLogin('');
        setPassword('');
    }
    
    if(displayUserForm)
    return (
        <>
            <InputUserForm setDisplay={setDisplayUserForm} setUser={setLogin}/>
        </>
    )

    if(displayNumberForm)
    return (
        <>
            <InputNumberForm setDisplay={setDisplayNumberForm} setNumber={setPassword}/>
        </>
    )

    return (
        <form {...props} action="" className = {classes.formAuth}>
            <MyInput 
                value={login} 
                onClick={ () => {setDisplayUserForm(true)} }
                onChange= {(event) => setLogin(event.target.value)}
                className={classes.login} 
                type="text" 
                placeholder="login..."
            />
            <MyInput
                value={password}
                onClick={ () => {setDisplayNumberForm(true)} }
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
