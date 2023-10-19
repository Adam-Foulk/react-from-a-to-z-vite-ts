import {useState} from 'react';
import styles from "./InputNumberForm.module.less"
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import ActionPanel from '../ActionPanel/ActionPanel';

const InputNumberForm = ({setDisplay, setNumber}) => {
    
    const [value, setValue] = useState('');

    const clearHandler = () => {
        setValue('')
    }
    const cancelHandler = () => {
        setDisplay(false)
    }
    const enterHandler = () => {
        if(value.length > 0)
            setNumber(value)
        console.dir(`INputNumberFormValue: ${value}`)
        // console.log(`value.length: ${value.length}`)
        setDisplay(false)
    }

    const addText = (text) => () => (
        setValue(value + text)
    )
    
    return (
        <div className={styles.inputNumberForm}>
            <MyInput type="text" value={value}/>
            <div className={styles.numberPannel}>
                <MyButton onClick={ addText('7') }>7</MyButton>
                <MyButton onClick={ addText('8') }>8</MyButton>
                <MyButton onClick={ addText('9') }>9</MyButton>
                <MyButton onClick={ addText('4') }>4</MyButton>
                <MyButton onClick={ addText('5') }>5</MyButton>
                <MyButton onClick={ addText('6') }>6</MyButton>
                <MyButton onClick={ addText('1') }>1</MyButton>
                <MyButton onClick={ addText('2') }>2</MyButton>
                <MyButton onClick={ addText('3') }>3</MyButton>
                <MyButton onClick={ addText('0') }>0</MyButton>
                <MyButton onClick={ addText('00')}>00</MyButton>
                <MyButton onClick={ addText('.') }>.</MyButton>
            </div>
           <ActionPanel 
                direction={'vertical'} 
                cancelHandler={cancelHandler} 
                clearHandler={clearHandler} 
                enterHandler={() => {enterHandler(setNumber)}} 
           />
        </div>
    );
};

export default InputNumberForm;