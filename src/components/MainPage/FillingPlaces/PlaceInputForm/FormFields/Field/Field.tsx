import MyButton from "components/UI/MyButton/MyButton";
import InputNumberForm from "components/UI/InputNumberForm/InputNumberForm";
import { FC, useState } from "react";
import styles from "./Field.module.less";
import classNames from "classnames";

type FieldProps = {
  isDisabled: boolean;
  description: string;
  value: number;
  setValue?: (value: number) => void;
};

const Field: FC<FieldProps> = ({
  isDisabled = false,
  description,
  value,
  setValue,
}) => {
  const [displayInputNumberForm, setDisplayInputNumberForm] = useState(false);
  const onSetNumber = (value: string) => {
    if (setValue) {
      setValue(Number(value));
    }
  };
  const onClickHandler = () => {
    setDisplayInputNumberForm(true);
  };
  return (
    <>
      {displayInputNumberForm && (
        <InputNumberForm
          setDisplay={setDisplayInputNumberForm}
          setNumber={onSetNumber}
        />
      )}
      <MyButton
        className={classNames(isDisabled && styles.disabled, styles.field)}
        onClick={setValue && onClickHandler}
      >
        <p>{description}</p>
        <p>{value.toFixed(2)}</p>
      </MyButton>
    </>
  );
};

export default Field;
