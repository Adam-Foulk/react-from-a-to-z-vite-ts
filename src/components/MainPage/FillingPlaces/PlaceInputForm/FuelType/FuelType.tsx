import styles from "./FuelType.module.less";
import MyButton from "components/UI/MyButton/MyButton";
import { FC, useState } from "react";
import { EFuelType } from "../PlaceInputForm";

type FuelTypeProps = {
  fuelType: EFuelType;
  setFuelType: (fuelType: EFuelType) => void;
};

const FuelType: FC<FuelTypeProps> = ({ fuelType, setFuelType }) => {
  const [displayFuelTypeForm, setDisplayFuelTypeForm] =
    useState<boolean>(false);

  return (
    <div className={styles.fuelType}>
      {displayFuelTypeForm === false ? (
        <MyButton
          onClick={() => {
            setDisplayFuelTypeForm(true);
          }}
          className={styles[fuelType]}
        >
          {fuelType}
        </MyButton>
      ) : (
        <div className={styles.form}>
          <MyButton
            className={styles.a95}
            onClick={() => {
              setFuelType(EFuelType.a95);
              setDisplayFuelTypeForm(false);
            }}
          >
            {EFuelType.a95}
          </MyButton>

          <MyButton
            className={styles.m95}
            onClick={() => {
              setFuelType(EFuelType.m95);
              setDisplayFuelTypeForm(false);
            }}
          >
            {EFuelType.m95}
          </MyButton>

          <MyButton
            className={styles.dp}
            onClick={() => {
              setFuelType(EFuelType.dp);
              setDisplayFuelTypeForm(false);
            }}
          >
            {EFuelType.dp}
          </MyButton>

          <MyButton
            className={styles.mdp}
            onClick={() => {
              setFuelType(EFuelType.mdp);
              setDisplayFuelTypeForm(false);
            }}
          >
            {EFuelType.mdp}
          </MyButton>

          <MyButton
            className={styles.lpg}
            onClick={() => {
              setFuelType(EFuelType.lpg);
              setDisplayFuelTypeForm(false);
            }}
          >
            {EFuelType.lpg}
          </MyButton>

          <MyButton
            className={styles.nf}
            onClick={() => {
              setFuelType(EFuelType.nf);
              setDisplayFuelTypeForm(false);
            }}
          >
            {EFuelType.nf}
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default FuelType;
