import {useState} from 'react'
import styles from "./MainPage.module.less"

import BonusCardInfo from "./BonusCardInfo/BonusCardInfo"
import Settings from './Settings/Settings'
import News from './News/News'
import Hint from './Hint/Hint'
import FillingPlaces from './FillingPlaces/FillingPlaces'
import ProductCatalog from './ProductCatalog/ProductCatalog'

const MainPage = () => {
    const [bonusCard, setBonusCard] = useState({
        id: 123,
        name: "Adam",
        phoneNumber: "0966293123",
        bonuses: 3.1,
    })
    const [hint, setHint] = useState("welcome to the station!")

    return (
       <div className={styles.content}>
        <div className={styles.main}>
           <div className={styles.topLeft}>
                <Settings/>
                <News/>
                <main>
                    <BonusCardInfo 
                        bonusCard={bonusCard} 
                        setBonusCard={setBonusCard}
                    ></BonusCardInfo>
                    <Hint>{hint}</Hint>
                </main>
            </div>
            <div className={styles.topRight}>
                {/* <FillingPlaces/> */}
                <ProductCatalog/>
            </div>
        </div>
       </div>
        
    );
};

export default MainPage;