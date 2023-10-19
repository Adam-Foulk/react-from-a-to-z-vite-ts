import styles from "./Settings.module.less"
import MyButton from "components/UI/MyButton/MyButton";
import settings from "res/settings.svg"

const Settings = () => {
    return (
        <MyButton className={styles.settings}>
            <img src={settings} alt=""/>
        </MyButton>
    );
};

export default Settings;