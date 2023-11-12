import {useState} from 'react'
import styles from "./MainPage.module.less"

import BonusCardInfo from "./BonusCardInfo/BonusCardInfo"
import Settings from './Settings/Settings'
import News from './News/News'
import Hint from './Hint/Hint'
import FillingPlaces from './FillingPlaces/FillingPlaces'
import ProductCatalog from './ProductCatalog/ProductCatalog'

import ListButtons from 'components/UI/ListButtons/ListButtons'
import Tabs from './Tabs/Tabs'
import OrderTable from './OrderTable/OrderTable'

const MainPage = () => {
    const [bonusCard, setBonusCard] = useState({
        id: 123,
        name: "Adam",
        phoneNumber: "0966293123",
        bonuses: 3.1,
    })
    const [hint, setHint] = useState("welcome to the station!")

    const [orders, setOrders] = useState([
        {title: 222, content: [
            {
                id: 1,
                name: "Хот-дог класичний XXL т. булка",
                remainder: 200,
                quantity: 3,
                price: 55,
                discount: 5,
                sum: 150,
            },
            {
                id: 2,
                name: "Бургер яловичий подвійний",
                remainder: 40,
                quantity: 2,
                price: 75,
                discount: 0,
                sum: 150,
            },
            {
                id: 3,
                name: "Омивач 3л. Літній диня",
                remainder: 20,
                quantity: 1,
                price: 199,
                discount: 0,
                sum: 199,
            },
        ]},
        {title: 2, content: [
            {
                id: 1,
                name: "Хот-дог класичний XXL т. булка",
                remainder: 200,
                quantity: 3,
                price: 55,
                discount: 5,
                sum: 150,
            },
            {
                id: 2,
                name: "Бургер яловичий подвійний",
                remainder: 40,
                quantity: 2,
                price: 75,
                discount: 0,
                sum: 150,
            },
            {
                id: 3,
                name: "Омивач 3л. Літній диня",
                remainder: 20,
                quantity: 1,
                price: 199,
                discount: 0,
                sum: 199,
            },
        ]},
        {title: 4, content: [
            {
                id: 1,
                name: "Хот-дог класичний XXL т. булка",
                remainder: 200,
                quantity: 3,
                price: 55,
                discount: 5,
                sum: 150,
            },
            {
                id: 2,
                name: "Бургер яловичий подвійний",
                remainder: 40,
                quantity: 2,
                price: 75,
                discount: 0,
                sum: 150,
            },
            {
                id: 3,
                name: "Омивач 3л. Літній диня",
                remainder: 20,
                quantity: 1,
                price: 199,
                discount: 0,
                sum: 199,
            },
        ]},
    ]);
    
    const [activeOrder, setActiveOrder] = useState(0);
    const [activeItem, setActiveItem] = useState(0)

    const addProduct = (code: number) => {
        const products = [
            {
                id: 1,
                name: "hot dog light bun big milk",
                remainder: 53,
                price: 64,
                discount: 5,
            },
            {
                id: 2,
                name: "hot dog light bun big smoked",
                remainder: 53,
                price: 64,
                discount: 5,
            },
            {
                id: 3,
                name: "hot dog light bun big chicken",
                remainder: 53,
                price: 64,
                discount: 5,
            },
            {
                id: 4,
                name: "hot dog light bun little milk",
                remainder: 49,
                price: 64,
                discount: 5,
            },
            {
                id: 5,
                name: "hot dog light bun little smoked",
                remainder: 49,
                price: 64,
                discount: 5,
            },
            {
                id: 6,
                name: "hot dog light bun little chicken",
                remainder: 49,
                price: 64,
                discount: 5,
            },
            {
                id: 7,
                name: "hot dog dark bun big milk",
                remainder: 53,
                price: 74,
                discount: 5,
            },
            {
                id: 8,
                name: "hot dog dark bun big smoked",
                remainder: 53,
                price: 74,
                discount: 5,
            },
            {
                id: 9,
                name: "hot dog dark bun big chicken",
                remainder: 53,
                price: 74,
                discount: 5,
            },
            {
                id: 10,
                name: "hot dog dark bun little milk ",
                remainder: 49,
                price: 64,
                discount: 5,
            },
            {
                id: 11,
                name: "hot dog dark bun little smoked",
                remainder: 49,
                price: 64,
                discount: 5,
            },
            {
                id: 12,
                name: "hot dog dark bun little chicken",
                remainder: 49,
                price: 64,
                discount: 5,
            },
            {
                id: 13,
                name: "single cow burger",
                remainder: 50,
                price: 104,
                discount: 5,
            },
            {
                id: 14,
                name: "single chicken burger",
                remainder: 50,
                price: 104,
                discount: 5,
            },
            {
                id: 15,
                name: "single vegan burger",
                remainder: 30,
                price: 120,
                discount: 5,
            },
            {
                id: 16,
                name: "double cow burger",
                remainder: 15,
                price: 154,
                discount: 5,
            },
            {
                id: 17,
                name: "double chicken burger",
                remainder: 25,
                price: 154,
                discount: 5,
            },
            {
                id: 18,
                name: "double vegan burger",
                remainder: 15,
                price: 154,
                discount: 5,
            },
            {
                id: 19,
                name: "borsch",
                remainder: 30,
                price: 105,
                discount: 6,
            },
            {
                id: 20,
                name: "chicken bouillon",
                remainder: 28,
                price: 95,
                discount: 0,
            },
            {
                id: 21,
                name: "soup with broccoli",
                remainder: 23,
                price: 115,
                discount: 6,
            },
            {
                id: 22,
                name: "soup kharcho",
                remainder: 34,
                price: 110,
                discount: 0,
            },
            {
                id: 23,
                name: "bolognese",
                remainder: 23,
                price: 115,
                discount: 6,
            },
            {
                id: 24,
                name: "carbonara",
                remainder: 23,
                price: 115,
                discount: 6,
            },
            {
                id: 25,
                name: "with mushrooms in creamy sauce",
                remainder: 23,
                price: 115,
                discount: 6,
            },
            {
                id: 26,
                name: "dijon chicken fillet with rice and vegetables",
                remainder: 30,
                price: 125,
                discount: 0,
            },
            {
                id: 27,
                name: "chicken wings",
                remainder: 50,
                price: 120,
                discount: 0,
            },
            {
                id: 28,
                name: "country-style potatoes",
                remainder: 80,
                price: 76,
                discount: 0,
            },
            {
                id: 29,
                name: "lattice potatoes",
                remainder: 80,
                price: 76,
                discount: 0,
            },
            {
                id: 30,
                name: "chicken strips",
                remainder: 50,
                price: 115,
                discount: 0,
            },
            {
                id: 31,
                name: "tuna fresh-sandwich",
                remainder: 50,
                price: 115,
                discount: 6,
            },
            {
                id: 32,
                name: "chicken fresh-sandwich",
                remainder: 70,
                price: 115,
                discount: 0,
            },
            {
                id: 33,
                name: "ham croissant",
                remainder: 50,
                price: 115,
                discount: 6,
            },
            {
                id: 34,
                name: "cheese croissant",
                remainder: 50,
                price: 115,
                discount: 0,
            },
            {
                id: 35,
                name: "jamon croissant",
                remainder: 50,
                price: 115,
                discount: 0,
            },
            {
                id: 36,
                name: "chicken sandwich",
                remainder: 110,
                price: 105,
                discount: 0,
            },
            {
                id: 37,
                name: "salami & smoked chicken sandwich",
                remainder: 110,
                price: 105,
                discount: 0,
            },
            {
                id: 38,
                name: "tuna sandwich",
                remainder: 110,
                price: 105,
                discount: 0,
            },
            {
                id: 39,
                name: "salmon sandwich",
                remainder: 110,
                price: 105,
                discount: 0,
            },
            {
                id: 40,
                name: "ham salad",
                remainder: 50,
                price: 115,
                discount: 6,
            },
            {
                id: 41,
                name: "cheese salad",
                remainder: 50,
                price: 115,
                discount: 6,
            },
            {
                id: 42,
                name: "jamon salad",
                remainder: 50,
                price: 115,
                discount: 6,
            },
            {
                id: 43,
                name: "scrambled eggs with sausage",
                remainder: 50,
                price: 115,
                discount: 6,
            },
            {
                id: 44,
                name: "lemon cheesecake",
                remainder: 52,
                price: 80,
                discount: 0,
            },
            {
                id: 84,
                name: "strawberry cheesecake",
                remainder: 52,
                price: 80,
                discount: 0,
            },
            {
                id: 80,
                name: "americano with milk",
                remainder: 60,
                price: 55,
                discount: 0,
            },
            {
                id: 81,
                name: "cortado",
                remainder: 60,
                price: 55,
                discount: 0,
            },
            {
                id: 82,
                name: "espresso with milk",
                remainder: 100,
                price: 45,
                discount: 0,
            },
            {
                id: 45,
                name: "big capuccino",
                remainder: 50,
                price: 65,
                discount: 0,
            },
            {
                id: 46,
                name: "medium capuccino",
                remainder: 55,
                price: 55,
                discount: 0,
            },
            {
                id: 47,
                name: "big late",
                remainder: 59,
                price: 65,
                discount: 0,
            },
            {
                id: 48,
                name: "medium late",
                remainder: 55,
                price: 55,
                discount: 0,
            },
            {
                id: 49,
                name: "big flat-white",
                remainder: 59,
                price: 65,
                discount: 0,
            },
            {
                id: 50,
                name: "medium flat-white",
                remainder: 55,
                price: 55,
                discount: 0,
            },
            {
                id: 51,
                name: "espresso",
                remainder: 100,
                price: 40,
                discount: 0,
            },
            {
                id: 52,
                name: "americano",
                remainder: 60,
                price: 50,
                discount: 0,
            },
            {
                id: 53,
                name: "natural sea buckthorn",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 54,
                name: "natural currant",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 55,
                name: "natural raspberry",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 56,
                name: "natural ginger",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 57,
                name: "bags black",
                remainder: 50,
                price: 43,
                discount: 0,
            },
            {
                id: 58,
                name: "bags green",
                remainder: 50,
                price: 43,
                discount: 0,
            },
            {
                id: 59,
                name: "bags herbal",
                remainder: 50,
                price: 43,
                discount: 0,
            },
            {
                id: 60,
                name: "dessert ginger",
                remainder: 69,
                price: 70,
                discount: 0,
            },
            {
                id: 61,
                name: "dessert lemon",
                remainder: 69,
                price: 70,
                discount: 0,
            },
            {
                id: 62,
                name: "cupcake chocolate",
                remainder: 69,
                price: 55,
                discount: 0,
            },
            {
                id: 63,
                name: "cupcake vanilla",
                remainder: 69,
                price: 55,
                discount: 0,
            },
            {
                id: 64,
                name: "cupcake berry",
                remainder: 69,
                price: 55,
                discount: 0,
            },
            {
                id: 65,
                name: "cold americano",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 66,
                name: "cold capuccino",
                remainder: 50,
                price: 65,
                discount: 0,
            },
            {
                id: 67,
                name: "cold late",
                remainder: 50,
                price: 65,
                discount: 0,
            },
            {
                id: 68,
                name: "lemon coffee lemonade",
                remainder: 50,
                price: 65,
                discount: 0,
            },
            {
                id: 69,
                name: "cherries coffee lemonade",
                remainder: 50,
                price: 65,
                discount: 0,
            },
            {
                id: 70,
                name: "passion fruit coffee lemonade",
                remainder: 50,
                price: 65,
                discount: 0,
            },
            {
                id: 71,
                name: "lemon lemonade",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 72,
                name: "cherries lemonade",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 73,
                name: "passion fruit lemonade",
                remainder: 50,
                price: 60,
                discount: 0,
            },
            {
                id: 74,
                name: "rasberry donut",
                remainder: 69,
                price: 50,
                discount: 0,
            },
            {
                id: 75,
                name: "chocolate donut",
                remainder: 69,
                price: 50,
                discount: 0,
            },
            {
                id: 76,
                name: "condensed milk donut",
                remainder: 69,
                price: 50,
                discount: 0,
            },
            {
                id: 77,
                name: "chocolate croissant",
                remainder: 69,
                price: 55,
                discount: 0,
            },
            {
                id: 78,
                name: "apricot croissant",
                remainder: 69,
                price: 55,
                discount: 0,
            },
            {
                id: 79,
                name: "puff pastry apple & nuts",
                remainder: 69,
                price: 55,
                discount: 0,
            },
        ]

        let newProduct: {
            id: number,
            name: string,
            remainder: number,
            quantity: number,
            price: number,
            discount: number,
            sum: number,  
        }

        for(const product of products) {
            if(product.id === code){
                newProduct = {...product, quantity: 1, sum: (product.price-product.discount)}
            }
        }

        const newOrder = orders[activeOrder]
        // newOrder.content = newOrder.content.map((product) => {
        //     if(product.id === newProduct.id) {
        //         product.quantity++
        //         return product
        //     } else
        //     {
        //         return newProduct
        //     }
        // })

        let newActiveItem = activeItem
        let i = 0
        for(const product of newOrder.content ) {
            if(product.id === newProduct.id) {
                product.quantity += 1
                newActiveItem = i
                i ++
                break
            } else {
                // newOrder.content.push(newProduct)
                newOrder.content = [...newOrder.content, newProduct]
                newActiveItem = orders[activeOrder].content.length-1
                break
            }
        }

        const newOrders = orders
        newOrders[activeOrder] = newOrder
        
        setOrders(newOrders)
        setActiveItem(newActiveItem)
    }

    const onListUp = () => {
        activeItem > 0
        ? setActiveItem(activeItem-1)
        : null
    }
    const onListDown = () => {
        activeItem < orders[activeOrder].content.length -1
        ? setActiveItem(activeItem+1)
        : null
    }

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
                <ProductCatalog addProduct={addProduct}/>
            </div>

            <div className={styles.bottomLeft}>
                <header>
                    <Tabs 
                        orders={orders}
                        setOrders={setOrders}
                        active={activeOrder}
                        setActive={setActiveOrder}
                    />
                    <ListButtons 
                        onListUp={onListUp}
                        onListDown={onListDown}
                    />
                </header>
                <main>
                    <OrderTable 
                        orders={orders} 
                        active={activeOrder}
                        activeItem={activeItem}
                        setActiveItem={setActiveItem}
                    />
                </main>

            </div>



        </div>
       </div>
        
    );
};

export default MainPage;