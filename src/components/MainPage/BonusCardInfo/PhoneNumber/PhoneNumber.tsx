import { FC, useState } from "react";
import MyButton from "components/UI/MyButton/MyButton";
import phoneNumber from "res/phone-number.svg";
import InputNumberForm from "components/UI/InputNumberFormOld/InputNumberForm";
import { TPhoneNumber } from "types/types";

type PhoneNumberProps = {
  className: string;
  setPhoneNumber: (phoneNumber: TPhoneNumber) => void;
};

const PhoneNumber: FC<PhoneNumberProps> = ({ className, setPhoneNumber }) => {
  const [displayInputNumberForm, setDisplayInputNumberForm] = useState(false);

  const onPhoneNumber = () => {
    setDisplayInputNumberForm(true);
  };

  return (
    <>
      {displayInputNumberForm && (
        <InputNumberForm
          setDisplay={setDisplayInputNumberForm}
          setNumber={setPhoneNumber}
        />
      )}
      <MyButton onClick={onPhoneNumber} className={className}>
        <img src={phoneNumber} alt="icon-phone-number" />
        input phone number
      </MyButton>
    </>
  );
};

export default PhoneNumber;
