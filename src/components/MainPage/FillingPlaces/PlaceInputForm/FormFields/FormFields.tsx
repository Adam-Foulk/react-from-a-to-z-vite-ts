import styles from "./FormFields.module.less";
import Field from "./Field/Field";
import { FC } from "react";

type FormFieldsProps = {
  isDisabled: boolean;
  litersQuantity: number;
  setLitersQuantity?: (litersQuantity: number) => void;
  price: number;
  discount: number;
  resultPrice: number;
  setResultPrice?: (resultPrice: number) => void;
};

const FormFields: FC<FormFieldsProps> = ({
  isDisabled,
  litersQuantity,
  setLitersQuantity,
  price: price,
  discount,
  resultPrice,
  setResultPrice,
}) => {
  return (
    <div className={styles.formFields}>
      <Field
        isDisabled={isDisabled}
        description="Liters quantity"
        value={litersQuantity}
        setValue={setLitersQuantity}
      />
      <Field isDisabled={true} description="Price" value={price} />
      <Field isDisabled={isDisabled} description="Discount" value={discount} />
      <Field
        isDisabled={isDisabled}
        description="Result Price"
        value={resultPrice}
        setValue={setResultPrice}
      />
    </div>
  );
};

export default FormFields;
