import styles from "./FuelType.module.less"
import MyButton from '../../UI/MyButton/MyButton';
import { useState} from "react";

const FuelType = ({fuelTypes, fuelType, setFuelType}) => {
    
    const [displayFuelTypeForm, setDisplayFuelTypeForm] = useState(false)

    return (
        <div className={styles.fuelType}>
            {displayFuelTypeForm === false
                ? <MyButton onClick={() => {setDisplayFuelTypeForm(true)}} className={styles[fuelType]}>{fuelType}</MyButton>                
                :(
                    <div className={styles.form}>
                        <MyButton 
                            className={styles.a95}
                            onClick={()=>{
                                setFuelType(fuelTypes.a95)
                                setDisplayFuelTypeForm(false)
                            }}
                        >
                            {fuelTypes.a95}
                        </MyButton>

                        <MyButton
                            className={styles.m95}
                            onClick={()=>{
                                setFuelType(fuelTypes.m95)
                                setDisplayFuelTypeForm(false)
                            }}
                        >   
                            {fuelTypes.m95}
                        </MyButton>
                        
                        <MyButton 
                            className={styles.dp}
                            onClick={()=>{
                                setFuelType(fuelTypes.dp)
                                setDisplayFuelTypeForm(false)
                            }}
                        >
                            {fuelTypes.dp}
                        </MyButton>
                        
                        <MyButton 
                            className={styles.mdp}
                            onClick={()=>{
                                setFuelType(fuelTypes.mdp)
                                setDisplayFuelTypeForm(false)
                            }}
                        >
                            {fuelTypes.mdp}
                        </MyButton>
                        
                        <MyButton 
                            className={styles.lpg}
                            onClick={()=>{
                                setFuelType(fuelTypes.lpg)
                                setDisplayFuelTypeForm(false)
                            }}
                        >
                            {fuelTypes.lpg}
                        </MyButton>
                        
                        <MyButton 
                            className={styles.nf}
                            onClick={()=>{
                                setFuelType(fuelTypes.nf)
                                setDisplayFuelTypeForm(false)
                            }}
                        >
                            {fuelTypes.nf}
                        </MyButton>
                    </div>
            )}
            
        </div>
    
    );
};

export default FuelType;