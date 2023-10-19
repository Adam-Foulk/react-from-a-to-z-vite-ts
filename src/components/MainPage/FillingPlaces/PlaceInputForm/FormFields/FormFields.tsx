import styles from "./FormFields.module.less"
import Field from "./Field/Field";

const FormFields = ({
    disabled,
    litersQuantity,
    setLitersQuantity,
    price: price,
    setPrice,
    discount,
    setDiscount,
    resultPrice,
    setResultPrice,
}) => {
    return (
        <div className={styles.formFields}>
            <Field disabled={disabled} description="Liters quantity" value={litersQuantity} setValue={setLitersQuantity}/>
            <Field disabled={true} description="Price" value={price}/>
            <Field disabled={disabled} description="Discount" value={discount}/>
            <Field disabled={disabled} description="Result Price" value={resultPrice} setValue={setResultPrice}/>
        </div>
    );
};

export default FormFields;