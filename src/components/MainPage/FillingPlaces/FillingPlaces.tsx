import styles from "./FillingPlaces.module.less";

import FillingPlace from "./FillingPlace/FillingPlace";
import PlaceInputForm from "./PlaceInputForm/PlaceInputForm";
import { useInputNumber } from "components/UI/InputNumberForm/store";
import { useState } from "react";

const FillingPlaces = () => {
  const [displayPlaceInputForm, setDisplayPlaceInputForm] =
    useState<boolean>(false);
  //   const displayPlaceInputForm = useInputNumber((state) => state.display);
  //   const setDisplayPlaceInputForm = useInputNumber((state) => state.setDisplay);

  if (displayPlaceInputForm) return <PlaceInputForm />;

  const onPlaceHandler = () => {
    setDisplayPlaceInputForm(true);
  };

  return (
    <div className={styles.fillingPlaces}>
      <FillingPlace placeNumber={1} onClickHandler={onPlaceHandler} />
      <FillingPlace placeNumber={2} onClickHandler={onPlaceHandler} />
      <FillingPlace placeNumber={3} onClickHandler={onPlaceHandler} />
      <FillingPlace placeNumber={4} onClickHandler={onPlaceHandler} />
      <FillingPlace placeNumber={5} onClickHandler={onPlaceHandler} />
      <FillingPlace placeNumber={6} onClickHandler={onPlaceHandler} />
      <FillingPlace placeNumber={7} onClickHandler={onPlaceHandler} />
      <FillingPlace placeNumber={8} onClickHandler={onPlaceHandler} />
    </div>
  );
};

export default FillingPlaces;
