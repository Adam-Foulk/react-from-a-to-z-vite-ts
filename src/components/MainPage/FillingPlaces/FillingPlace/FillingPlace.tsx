import MyButton from "components/UI/MyButton/MyButton";
import styles from "./FillingPlace.module.less";
import { FC, useState } from "react";
import { TPlace } from "types/types";

type FillingPlaceProps = {
  placeNumber: number;
  onClickHandler: () => void;
};

export enum EState {
  enabled = "enabled",
  disabled = "disabled",
  filling = "filling",
  filled = "filled",
  returning = "returning",
}

const FillingPlace: FC<FillingPlaceProps> = ({
  placeNumber,
  onClickHandler,
}) => {
  const [place, setPlace] = useState<TPlace>({
    placeNumber: placeNumber,
    state: EState.enabled,
    fuelType: undefined,
    toFill: undefined,
    filled: undefined,
    price: undefined,
  });

  return (
    <div className={styles[place.state]}>
      <MyButton onClick={onClickHandler}>
        {place.fuelType || place.placeNumber}
      </MyButton>

      {(place.state === EState.filling ||
        place.state === EState.filled ||
        place.state === EState.returning) && (
        <label>
          {place.filled} / {place.toFill}
        </label>
      )}
    </div>
  );
};

export default FillingPlace;
