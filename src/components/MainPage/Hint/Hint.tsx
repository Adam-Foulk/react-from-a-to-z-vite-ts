import { FC, ReactNode } from "react";
import styles from "./Hint.module.less";

type HintProps = {
  children: ReactNode;
};

const Hint: FC<HintProps> = ({ children }) => {
  return (
    <div className={styles.hint}>
      <div className={styles.icon}>!</div>
      <p>{children}</p>
    </div>
  );
};

export default Hint;
