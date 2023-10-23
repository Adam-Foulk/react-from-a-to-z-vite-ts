import {useState} from 'react'
import styles from "./MainPage.module.less"

import BonusCardInfo from "./BonusCardInfo/BonusCardInfo"
import Settings from './Settings/Settings'
import News from './News/News'
import Hint from './Hint/Hint'
import FillingPlaces from './FillingPlaces/FillingPlaces'
import ProductCatalog from './ProductCatalog/ProductCatalog'
import TabsPannel from './TabsPannel/TabsPannel'


import ListButtons from 'components/UI/ListButtons/ListButtons'

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

            <div className={styles.bottomLeft}>
                <header>
                    <TabsPannel/>
                    <ListButtons/>
                </header>
                <main>
                    <table>
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Rem.</th>
                                <th>Quant.</th>
                                <th>price</th>
                                <th>disc.</th>
                                <th>sum</th>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Хот-дог класичний XXL т. булка</td>
                                <td></td>
                                <td>3</td>
                                <td>55</td>
                                <td>5</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Бургер яловичий подвійний</td>
                                <td></td>
                                <td>3</td>
                                <td>75</td>
                                <td></td>
                                <td>75</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Омивач 3л. Літній диня</td>
                                <td></td>
                                <td>1</td>
                                <td>200</td>
                                <td>50</td>
                                <td>150</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>1 / 2</th>
                                <th></th>
                                <th></th>
                                <th>3</th>
                                <th></th>
                                <th>65</th>
                                <th>375</th>
                            </tr>
                        </tfoot>
                    </table>
                </main>

            </div>



        </div>
       </div>
        
    );
};

export default MainPage;