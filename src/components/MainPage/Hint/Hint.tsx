import styles from "./Hint.module.less"

const Hint = ({children}) => {
    return (
        <div className={styles.hint}>
            <div className={styles.icon}>!</div>
            <p>{children}</p>
        </div>
    );
};

export default Hint;