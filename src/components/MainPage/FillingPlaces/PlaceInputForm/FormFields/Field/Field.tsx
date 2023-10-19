import MyButton from "../../../../../../UI/MyButton/MyButton";
import InputNumberForm from "../../../../../../UI/InputNumberForm/InputNumberForm";
import { useState } from "react";
import styles from "./Field.module.less"
import classNames from "classnames";

const Field = ({disabled = false, description, value, setValue}) => {
    const [displayInputNumberForm, setDisplayInputNumberForm] = useState(false)
    const onSetNumber = (value) => {
        if(setValue){
            setValue(Number(value))
        }
    }
    const onClickHandler = () => {
        setDisplayInputNumberForm(true)
    }
    return (
        <>
            {displayInputNumberForm && (
                <InputNumberForm 
                    setDisplay={setDisplayInputNumberForm}
                    setNumber={onSetNumber}
                /> 
            )}
            <MyButton className={classNames((disabled && styles.disabled), styles.field)} onClick={setValue && onClickHandler}>
                <p>{description}</p>
                <p>{value.toFixed(2)}</p>
            </MyButton>
        </>
    );
};

export default Field;