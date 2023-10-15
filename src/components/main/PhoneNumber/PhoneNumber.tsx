import {useState} from 'react'
import MyButton from "../../UI/MyButton/MyButton";
import phoneNumber from "../../../res/phone-number.svg"
import InputNumberForm from '../../UI/InputNumberForm/InputNumberForm';

const PhoneNumber = ({className, setPhoneNumber}) => {
    const [displayInputNumberForm, setDisplayInputNumberForm] = useState(false)

    const onPhoneNumber = () => {
        setDisplayInputNumberForm(true)
    }

    return (
        <>
            {displayInputNumberForm && (
                <InputNumberForm 
                    setDisplay={setDisplayInputNumberForm}
                    setNumber={setPhoneNumber}
                /> 
            )}
            <MyButton 
                onClick={onPhoneNumber} 
                className={className}
            >
                <img src={phoneNumber} alt="icon-phone-number"/>
                input phone number
            </MyButton>
        </>
    );
};

export default PhoneNumber;