import MyButton from "../../../UI/MyButton/MyButton";
import styles from "./FillingPlace.module.less"
import {useState} from "react";

const FillingPlace = ({
    placeNumber,
    onClickHandler
}) => {

    const State = {
        enabled:  'enabled',
        disabled: 'disabled',
        filling:  'filling',
        filled:   'filled',
        returning:'returning',
    }

    const [place, setPlace] = useState({
        placeNumber: placeNumber,
        state: State.enabled,
        fuelType: undefined,
        toFill: undefined,
        filled: undefined,
        price: undefined,
    })

    return (
        <div className={styles[place.state]}>
            <MyButton onClick={onClickHandler}>{place.fuelType || place.placeNumber}</MyButton>

            {   (place.state === State.filling ||
                place.state === State.filled ||
                place.state === State.returning) && 
                
                <label>{place.filled} / {place.toFill}</label>
            }
        </div>
    );
};

export default FillingPlace;