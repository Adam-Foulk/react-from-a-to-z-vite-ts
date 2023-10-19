import styles from "./PlaceInputForm.module.less"
import FuelType from "./FuelType/FuelType";
import { useState, useEffect} from "react";
import FormFields from "./FormFields/FormFields";

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

    const [fuelType, setFuelType]= useState(fuelTypes.nf)

    const [litersQuantity, setLitersQuantity] = useState(0.0)
    const [price, setPrice] = useState(0.0)
    const [discount, setDiscount] = useState(0.0)
    const [resultPrice , setResultPrice] = useState(0.0)
    const [formFieldsDisabled, setFormFieldsDisabled] = useState(true)
    
    useEffect(() => {
        for(const fuelPrice of fuelPrices) {
            if(fuelPrice.name === fuelType) {
                setResultPrice(litersQuantity * fuelPrice.price)
                setPrice(fuelPrice.price)
                setFormFieldsDisabled(false)
            }
        }
    }, [fuelType])

    const handleLitersQuantity = (value: number) => {
        setLitersQuantity(Number(value))
        if(price > 0) {
            setResultPrice(value * price)
        }
    }
    
    const handleResultPrice = (value: number) => {
        setResultPrice(Number(value))
        if(price > 0) {
            setLitersQuantity(value / price)
        }
    }
        
    return (
        <div className={styles.placeInputForm}>
            <FuelType fuelTypes={fuelTypes} fuelType={fuelType} setFuelType={setFuelType}/>
            <FormFields 
                disabled={formFieldsDisabled}
                litersQuantity= {litersQuantity}
                setLitersQuantity= {(fuelType != fuelTypes.nf) && handleLitersQuantity}
                price= {price}
                setPrice= {setPrice}
                discount= {discount}
                setDiscount= {setDiscount}
                resultPrice= {resultPrice}
                setResultPrice= {(fuelType != fuelTypes.nf) && handleResultPrice}
            />
        </div>
    );
};

export default PlaceInputForm;