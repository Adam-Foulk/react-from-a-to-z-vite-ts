import styles from "./FillingPlaces.module.less"

import MyButton from "../../../UI/MyButton/MyButton";
import FillingPlace from "../FillingPlace/FillingPlace";
import PlaceInputForm from "../PlaceInputForm/PlaceInputForm";
import { useState } from "react";

const FillingPlaces = () => {

    const [displayPlaceInputForm, setDisplayPlaceInputForm] = useState(false)

    if(displayPlaceInputForm) return(
        <PlaceInputForm />
    )

    const onPlaceHandler = (setType) => {
        setDisplayPlaceInputForm(true)
    }

    return (
        <div className={styles.fillingPlaces}>
            {/* <div className={styles.enabled}>
                <MyButton>1</MyButton>
                <label></label>
            </div> */}
            <FillingPlace onClickHandler={onPlaceHandler}/>
            <div className={styles.disabled}>
                <MyButton>2</MyButton>
                <label></label>
            </div>
            <div className={styles.filling}>
                <MyButton className={styles.a95}>a95</MyButton>
                <label>25.0 / 28.8</label>
            </div>
            <div className={styles.filled}>
                <MyButton className={styles.m95}>m95</MyButton>
                <label>25.0 / 25.0</label>
            </div>
            <div className={styles.returning}>
                <MyButton className={styles.dp}>dp</MyButton>
                <label>25.0 / 28.8</label>
            </div>
            <div className={styles.filling}>
                <MyButton className={styles.mdp}>mdp</MyButton>
                <label></label>
            </div>
            <div className={styles.filling}>
                <MyButton className={styles.lpg}>lpg</MyButton>
                <label></label>
            </div>
            <div className={styles.enabled}>
                <MyButton>8</MyButton>
                <label></label>
            </div>
        </div>
    );
};

export default FillingPlaces;