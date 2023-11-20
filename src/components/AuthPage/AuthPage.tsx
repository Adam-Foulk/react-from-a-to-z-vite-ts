import { FC } from "react";
import styles from "./AuthPage.module.less";

import FormAuth from "./FormAuth/FormAuth";
import { TUser } from "App";

type AuthPageProps = {
  users: TUser[];
  auth: (login: string, password: string) => boolean;
};

const AuthPage: FC<AuthPageProps> = ({ users, auth }) => {
  return (
    <div className={styles.main}>
      <FormAuth users={users} auth={auth}></FormAuth>
    </div>
  );
};

export default AuthPage;
