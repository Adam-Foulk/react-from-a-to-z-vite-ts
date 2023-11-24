import MyButton from "components/UI/MyButton/MyButton";
import styles from "./Action.module.less";
import { FC } from "react";
import classNames from "classnames";
import { EActionVariant } from "types/types";

type ActionProps = {
  variant: EActionVariant;
  onClick: () => void;
};

const Action: FC<ActionProps> = ({ variant, onClick }) => {
  return (
    <MyButton
      className={classNames(styles.product, styles[variant])}
      title={variant}
      onClick={onClick}
    >
      <p>{variant}</p>
    </MyButton>
  );
};

export default Action;
