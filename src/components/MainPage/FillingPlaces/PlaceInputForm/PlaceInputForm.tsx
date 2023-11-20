import styles from "./PlaceInputForm.module.less";
import FuelType from "./FuelType/FuelType";
import { useState, useEffect } from "react";
import FormFields from "./FormFields/FormFields";

export enum EFuelType {
  a95 = "a95",
  m95 = "m95",
  dp = "dp",
  mdp = "mdp",
  lpg = "lpg",
  nf = "nf",
}

type FuelPrice = {
  name: EFuelType;
  price: number;
};

const PlaceInputForm = () => {
  const fuelPrices: FuelPrice[] = [
    { name: EFuelType.a95, price: 50 },
    { name: EFuelType.m95, price: 55 },
    { name: EFuelType.dp, price: 45 },
    { name: EFuelType.mdp, price: 50 },
    { name: EFuelType.lpg, price: 30 },
    { name: EFuelType.nf, price: 0 },
  ];

  const [fuelType, setFuelType] = useState<EFuelType>(EFuelType.nf);

  const [litersQuantity, setLitersQuantity] = useState(0.0);
  const [price, setPrice] = useState(0.0);
  const [discount, setDiscount] = useState(0.0);
  const [resultPrice, setResultPrice] = useState(0.0);
  const [formFieldsDisabled, setFormFieldsDisabled] = useState(true);

  useEffect(() => {
    for (const fuelPrice of fuelPrices) {
      if (fuelPrice.name === fuelType) {
        setResultPrice(litersQuantity * fuelPrice.price);
        setPrice(fuelPrice.price);
        setFormFieldsDisabled(false);
      }
    }
  }, [fuelType]);

  const handleLitersQuantity = (value: number) => {
    setLitersQuantity(Number(value));
    if (price > 0) {
      setResultPrice(value * price);
    }
  };

  const handleResultPrice = (value: number) => {
    setResultPrice(Number(value));
    if (price > 0) {
      setLitersQuantity(value / price);
    }
  };

  return (
    <div className={styles.placeInputForm}>
      <FuelType fuelType={fuelType} setFuelType={setFuelType} />
      <FormFields
        isDisabled={formFieldsDisabled}
        litersQuantity={litersQuantity}
        setLitersQuantity={
          fuelType != EFuelType.nf ? handleLitersQuantity : undefined
        }
        price={price}
        discount={discount}
        resultPrice={resultPrice}
        setResultPrice={
          fuelType != EFuelType.nf ? handleResultPrice : undefined
        }
      />
    </div>
  );
};

export default PlaceInputForm;
