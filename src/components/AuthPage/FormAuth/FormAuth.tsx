import { FC, useState } from "react";
import classes from "./FormAuth.module.less";

import MyButton from "components/UI/MyButton/MyButton";
import MyInput from "components/UI/MyInput/MyInput";

import InputNumberForm from "components/UI/InputNumberFormOld/InputNumberForm";
import InputUserForm from "./InputUserForm/InputUserForm";
import { TUser } from "App";

type FormAuthProps = {
  users: TUser[];
  auth: (login: string, password: string) => boolean;
};

const FormAuth: FC<FormAuthProps> = ({ auth, users, ...props }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [displayNumberForm, setDisplayNumberForm] = useState<boolean>(false);
  const [displayUserForm, setDisplayUserForm] = useState<boolean>(false);

  const [displayPassMsg, setDisplayPassMsg] = useState<boolean>(false);

  const onAuth = (event: MouseEvent) => {
    event.preventDefault();
    const isAuth = auth(login, password);
    setDisplayPassMsg(!isAuth);
    if (isAuth) setLogin("");
    setPassword("");
  };

  if (displayUserForm)
    return (
      <>
        <InputUserForm
          users={users}
          setDisplay={setDisplayUserForm}
          setUserName={setLogin}
        />
      </>
    );

  if (displayNumberForm)
    return (
      <>
        <InputNumberForm
          setDisplay={setDisplayNumberForm}
          setNumber={setPassword}
        />
      </>
    );

  return (
    <form {...props} action="" className={classes.formAuth}>
      <MyInput
        value={login}
        onClick={() => {
          setDisplayUserForm(true);
        }}
        onChange={(event) => setLogin(event.target.value)}
        className={classes.login}
        type="text"
        placeholder="login..."
      />
      <MyInput
        value={password}
        onClick={() => {
          setDisplayNumberForm(true);
        }}
        onChange={(event) => setPassword(event.target.value)}
        className={classes.pass}
        type="password"
        placeholder="password..."
      />
      <span
        style={!displayPassMsg ? { display: "none" } : {}}
        className={classes.passMsg}
      >
        invalid password
      </span>
      <MyButton onClick={onAuth} className={classes.action}>
        login
      </MyButton>
    </form>
  );
};

export default FormAuth;
