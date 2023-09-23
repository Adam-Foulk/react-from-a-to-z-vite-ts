import styles from "./AuthPage.module.less"

import FormAuth from "../FormAuth/FormAuth";

const AuthPage = () => {
    return (
        <div className={styles.main}>
            
            <FormAuth></FormAuth>
        </div>
    );
};

export default AuthPage;