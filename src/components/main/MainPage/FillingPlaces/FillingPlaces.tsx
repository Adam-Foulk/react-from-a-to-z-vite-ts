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
            <FillingPlace placeNumber={1} onClickHandler={onPlaceHandler}/>
            <FillingPlace placeNumber={2} onClickHandler={onPlaceHandler}/>
            <FillingPlace placeNumber={3} onClickHandler={onPlaceHandler}/>
            <FillingPlace placeNumber={4} onClickHandler={onPlaceHandler}/>
            <FillingPlace placeNumber={5} onClickHandler={onPlaceHandler}/>
            <FillingPlace placeNumber={6} onClickHandler={onPlaceHandler}/>
            <FillingPlace placeNumber={7} onClickHandler={onPlaceHandler}/>
            <FillingPlace placeNumber={8} onClickHandler={onPlaceHandler}/>

        </div>
    );
};

export default FillingPlaces;