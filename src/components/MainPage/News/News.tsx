import styles from "./News.module.less"
import MyButton from "../../../UI/MyButton/MyButton";

const News = () => {
    return (
        <MyButton className={styles.news}>
            <p>
                No news is good news...
            </p>
            <p>
                (press for watching history)
            </p>
        </MyButton>
    );
};

export default News;