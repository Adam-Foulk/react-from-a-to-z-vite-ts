import {useState} from 'react'
import styles from "./MainPage.module.less"

import BonusCardInfo from "../BonusCardInfo/BonusCardInfo"
import Settings from '../Settings/Settings'
import News from '../News/News'
import Hint from '../Hint/Hint'
import FillingPlaces from './FillingPlaces/FillingPlaces'

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
                <FillingPlaces/>
                {/* <div className={styles.productCatalog}>
                    <MyButton className={classNames(styles.fast, styles.food, styles.item)}>
                        <img src="./res/product-catalog/french-hot-dog.svg" alt=""/>
                        <p>hot dogs</p>
                    </MyButton>
                    <MyButton className={classNames(styles.fast, styles.food, styles.item)}>
                        <img src="./res/product-catalog/burger.svg" alt=""/>
                        <p>burgers</p>
                    </MyButton>
                    <MyButton className={classNames(styles.healthy, styles.food, styles.item)}>
                        <img src="./res/product-catalog/soup-plate.svg" alt=""/>
                        <p>first meal</p>
                    </MyButton>
                    <MyButton className={classNames(styles.healthy, styles.food, styles.item)}>
                        <img src="./res/product-catalog/spaguetti.svg" alt=""/>
                        <p>main dishes</p>
                    </MyButton>
                    <MyButton className={classNames(styles.fast, styles.food, styles.item)}>
                        <img src="./res/product-catalog/french-fries.svg" alt=""/>
                        <p>snacks</p>
                    </MyButton>
                    <MyButton className={classNames(styles.fast, styles.food, styles.item)}>
                        <img src="./res/product-catalog/sandwich.svg" alt=""/>
                        <p>sandwiches</p>
                    </MyButton>
                    <MyButton className={classNames(styles.healthy, styles.food, styles.item)}>
                        <img src="./res/product-catalog/salade.svg" alt=""/>
                        <p>salads</p>
                    </MyButton>
                    <MyButton className={classNames(styles.healthy, styles.food, styles.item)}>
                        <img src="./res/product-catalog/breakfast.svg" alt=""/>
                        <p>breakfasts</p>
                    </MyButton>
                    <MyButton className={classNames(styles.baverages, styles.item)}>
                        <img src="./res/product-catalog/coffee.svg" alt=""/>
                        <p>coffee</p>
                    </MyButton>
                    <MyButton className={classNames(styles.baverages, styles.item)}>
                        <img src="./res/product-catalog/tea.svg" alt=""/>
                        <p>tea</p>
                    </MyButton>
                    <MyButton className={classNames(styles.bakery, styles.item)}>
                        <img src="./res/product-catalog/cake.svg" alt=""/>
                        <p>desserts</p>
                    </MyButton>
                    <MyButton className={classNames(styles.bakery, styles.item)}>
                        <img src="./res/product-catalog/cupcakesvg.svg" alt=""/>
                        <p>cupcakes</p>
                    </MyButton>
                    <MyButton className={classNames(styles.baverages, styles.item)}>
                        <img src="./res/product-catalog/cold-coffee.svg" alt=""/>
                        <p>cold coffee</p>
                    </MyButton>
                    <MyButton className={classNames(styles.baverages, styles.item)}>
                        <img src="./res/product-catalog/cold-drink.svg" alt=""/>
                        <p>cold drinks</p>
                    </MyButton>
                    <MyButton className={classNames(styles.bakery, styles.item)}>
                        <img src="./res/product-catalog/donut.svg" alt=""/>
                        <p>donuts</p>
                    </MyButton>
                    <MyButton className={classNames(styles.bakery, styles.item)}>
                        <img src="./res/product-catalog/croissant.svg" alt=""/>
                        <p>own bakery</p>
                    </MyButton>
                </div> */}
            </div>
        </div>
       </div>
        
    );
};

export default MainPage;