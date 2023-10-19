import styles from "./AuthPage.module.less"

import FormAuth from "./FormAuth/FormAuth";

const AuthPage = ({users, auth}) => {
    return (
        <div className={styles.main}>
            <FormAuth users={users} auth={auth}></FormAuth>
        </div>
    );
};

export default AuthPage;