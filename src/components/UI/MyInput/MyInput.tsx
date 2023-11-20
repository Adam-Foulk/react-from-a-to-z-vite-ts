import styles from "./MyInput.module.less";
import { FC, HTMLAttributes } from "react";
import classNames from "classnames";

type MyInputProps = HTMLAttributes<HTMLInputElement> & {
  type: string;
  value: string;
};

const MyInput: FC<MyInputProps> = ({ className, type, value, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      {...props}
      className={classNames(className, styles.myInput)}
    />
  );
};

export default MyInput;
