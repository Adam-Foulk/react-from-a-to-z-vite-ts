import {useState} from 'react'
import classes from "./FormAuth.module.less"

import MyButton from "../../UI/MyButton/MyButton"
import MyInput from "../../UI/MyInput/MyInput"

import InputNumberForm from '../../UI/InputNumberForm/InputNumberForm'
import InputUserForm from '../InputUserForm/InputUserForm'

const FormAuth = ({auth, users, ...props}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const [displayNumberForm, setDisplayNumberForm] = useState(false)
    const [displayUserForm, setDisplayUserForm] = useState(false)

    const [displayPassMsg, setDisplayPassMsg] = useState(false)

    const onAuth = (event) => {
        event.preventDefault();
        const isAuth = auth(login, password)
        setDisplayPassMsg(!isAuth)
        if(isAuth) setLogin('')
        setPassword('');
    }

    if(displayUserForm)
    return (
        <>
            <InputUserForm users={users} setDisplay={setDisplayUserForm} setUser={setLogin}/>
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
            <span style={!displayPassMsg? {display:'none'}: {}} className={classes.passMsg}>invalid password</span>
            <MyButton 
                onClick={onAuth}
                className={classes.action}
            >login</MyButton>
        </form>
    );
};

export default FormAuth;
