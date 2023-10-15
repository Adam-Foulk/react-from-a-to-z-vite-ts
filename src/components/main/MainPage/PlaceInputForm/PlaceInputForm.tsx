import styles from "./PlaceInputForm.module.less"
import FuelType from "../../FuelType/FuelType";
import { useState, useEffect} from "react";
import FormFields from "../../FormFields/FormFields";

const PlaceInputForm = () => {
    
    const fuelTypes = {
        a95: "a95",
        m95: "m95",
        dp:  "dp",
        mdp: "mdp",
        lpg: "lpg",
        nf:  "nf",
    }

    const fuelPrices = [
        {name: fuelTypes.a95, price: 50},
        {name: fuelTypes.m95, price: 55},
        {name: fuelTypes.dp, price: 45},
        {name: fuelTypes.mdp, price: 50},
        {name: fuelTypes.lpg, price: 30},
        {name: fuelTypes.nf, price: 0},
    ]
    
    // const fuelPrices = {
    //     a95: 50,
    //     m95: 55,
    //     dp: 45,
    //     mdp: 50,
    //     lpg: 30,
    //     nf: 0,
    // }

    const [fuelType, setFuelType]= useState(fuelTypes.nf)

    // must return number
    const [litersQuantity, setLitersQuantity] = useState(0.0)
    const [price, setPrice] = useState(0.0)
    const [discount, setDiscount] = useState(0.0)
    const [resultPrice , setResultPrice] = useState(0.0)
    
    useEffect(() => {
        for(const fuelPrice of fuelPrices) {
            if(fuelPrice.name === fuelType) {
                setPrice(fuelPrice.price)
            }
        }    
    }), [fuelType]

    // трабла 2 взаимо-вычисляемых поля => зацикливание
    useEffect(() => {
        if(price > 0)
            setResultPrice(litersQuantity * price)
    }), [litersQuantity, price]

    useEffect(() => {
        if(price > 0)
            setLitersQuantity(resultPrice / price)
    }), [resultPrice, price]

        
    return (
        <div className={styles.placeInputForm}>
            <FuelType fuelTypes={fuelTypes} fuelType={fuelType} setFuelType={setFuelType}/>
            <FormFields 
                litersQuantity= {litersQuantity}
                setLitersQuantity= {setLitersQuantity}
                price= {price}
                setPrice= {setPrice}
                discount= {discount}
                setDiscount= {setDiscount}
                resultPrice= {resultPrice}
                setResultPrice= {setResultPrice}
            />
        </div>
    );
};

export default PlaceInputForm;