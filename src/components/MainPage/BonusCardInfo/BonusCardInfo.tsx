import styles from "./BonusCardInfo.module.less"
import qrCode from "res/qr-code.svg"
import card from "res/card.svg"

import MyButton from "components/UI/MyButton/MyButton";
import PhoneNumber from "./PhoneNumber/PhoneNumber";

const BonusCardInfo = ({bonusCard, setBonusCard}) => {
    
    const setPhoneNumber = (phoneNumber) => {
        // getting client data with phoneNumber from db
        setBonusCard({
            id: 123,
            name: "Adam",
            phoneNumber: "0966293123",
            bonuses: 3.1
        })
    }
    
    return (
        <div className={styles.bonusCardInfo}>
            <MyButton className={styles.item}><img src={qrCode}/>scan qr-code from
                app</MyButton>
            <PhoneNumber className={styles.item} setPhoneNumber={setPhoneNumber}/>
            <MyButton className={styles.item}><img src={card} alt="icon-magnetic-card"/>take magnetic
                card</MyButton>
        </div>
    );
};

export default BonusCardInfo;