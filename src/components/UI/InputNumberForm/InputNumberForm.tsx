import { FC, useState } from "react";
import styles from "./InputNumberForm.module.less";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import ActionPanel, { EActionPanelDirection } from "../ActionPanel/ActionPanel";

type InputNumberFormProps = {
  setDisplay: (state: boolean) => void;
  setNumber: (number: string) => void;
};

const InputNumberForm: FC<InputNumberFormProps> = ({
  setDisplay,
  setNumber,
}) => {
  const [value, setValue] = useState<string>("");

  const clearHandler = () => {
    setValue("");
  };
  const cancelHandler = () => {
    setDisplay(false);
  };
  const enterHandler = () => {
    if (value.length > 0) setNumber(value);
    console.dir(`INputNumberFormValue: ${value}`);
    setDisplay(false);
  };

  const addText = () => (event: React.MouseEvent) => {
    setValue(value + event.target.innerText);
  };
  // help
  return (
    <div className={styles.inputNumberForm}>
      <MyInput type="text" value={value} />
      <div className={styles.numberPannel}>
        <MyButton onClick={addText()}>7</MyButton>
        <MyButton onClick={addText()}>8</MyButton>
        <MyButton onClick={addText()}>9</MyButton>
        <MyButton onClick={addText()}>4</MyButton>
        <MyButton onClick={addText()}>5</MyButton>
        <MyButton onClick={addText()}>6</MyButton>
        <MyButton onClick={addText()}>1</MyButton>
        <MyButton onClick={addText()}>2</MyButton>
        <MyButton onClick={addText()}>3</MyButton>
        <MyButton onClick={addText()}>0</MyButton>
        <MyButton onClick={addText()}>00</MyButton>
        <MyButton onClick={addText()}>.</MyButton>
      </div>
      <ActionPanel
        direction={EActionPanelDirection.vertical}
        cancelHandler={cancelHandler}
        clearHandler={clearHandler}
        enterHandler={enterHandler}
      />
    </div>
  );
};

export default InputNumberForm;
