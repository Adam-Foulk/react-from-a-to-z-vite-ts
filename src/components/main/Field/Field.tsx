import MyButton from "../../UI/MyButton/MyButton";
import InputNumberForm from "../../UI/InputNumberForm/InputNumberForm";
import { useState } from "react";
import styles from "./Field.module.less"

const Field = ({description, value, setValue}) => {
    const [displayInputNumberForm, setDisplayInputNumberForm] = useState(false)
    const onSetNumber = (value) => {
        setValue(Number(value))
    }
    return (
        <>
            {displayInputNumberForm && (
                <InputNumberForm 
                    setDisplay={setDisplayInputNumberForm}
                    setNumber={onSetNumber}
                /> 
            )}
            <MyButton className={styles.field} onClick={() => {setDisplayInputNumberForm(true)}}>
                <p>{description}</p>
                <p>{value}</p>
            </MyButton>
        </>
    );
};

export default Field;