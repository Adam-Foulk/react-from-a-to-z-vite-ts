import MyButton from "../../UI/MyButton/MyButton";
import styles from "./FormFields.module.less"
import { useState, useEffect } from "react";
import Field from "../Field/Field";

const FormFields = ({
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
            <Field description="Liters quantity" value={litersQuantity} setValue={setLitersQuantity}/>
            <Field description="Price" value={price}/>
            <Field description="Discount" value={discount}/>
            <Field description="Result Price" value={resultPrice} setValue={setResultPrice}/>
        </div>
    );
};

export default FormFields;