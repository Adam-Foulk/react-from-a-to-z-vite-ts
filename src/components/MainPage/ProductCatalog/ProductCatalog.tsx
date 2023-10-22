import styles from "./ProductCatalog.module.less"
import Product from "./Product/Product";
import { useEffect, useState } from "react";

import frenchHotDog from "res/product-catalog/french-hot-dog.svg"
import burger from "res/product-catalog/burger.svg"
import soupPlate from "res/product-catalog/soup-plate.svg"
import spaguetti from "res/product-catalog/spaguetti.svg"
import frenchFries from "res/product-catalog/french-fries.svg"
import sandwich from "res/product-catalog/sandwich.svg"
import salade from "res/product-catalog/salade.svg"
import breakfast from "res/product-catalog/breakfast.svg"
import coffee from "res/product-catalog/coffee.svg"
import tea from "res/product-catalog/tea.svg"
import cake from "res/product-catalog/cake.svg"
import cupcakesvg from "res/product-catalog/cupcakesvg.svg"
import coldCoffee from "res/product-catalog/cold-coffee.svg"
import coldDrink from "res/product-catalog/cold-drink.svg"
import donut from "res/product-catalog/donut.svg"
import croissant from "res/product-catalog/croissant.svg"

const ProductCatalog = () => {
    
    const [productCodes, setProductCodes] = useState([])
    
    const addProductCode = (code:number) => {
        console.log(...productCodes, code)
        setProductCodes([...productCodes, code])
    }

    const Products = [
        {icon: frenchHotDog, title: "hot dogs", className: styles.fastFood, childs: [
            {title: "big", childs: [
                {title: "big milk", code: 223},
                {title: "big smoked", code: 223},
                {title: "big chicken", code: 223},
            ]},
            {title: "little", childs: [
                {title: "little milk"},
                {title: "little smoked"},
                {title: "little chicken"},
            ]},
        ]},
        {icon: burger, title: "burgers", className: styles.fastFood, childs: [
            {title: "single", childs: [
                {title: "single cow", code: 223},
                {title: "single chicken"},
                {title: "single vegan"},
            ]},
            {title: "double", childs: [
                {title: "double cow", code: 223},
                {title: "double chicken"},
                {title: "double vegan"},
            ]},
        ]},
        {icon: soupPlate, title: "first meal", className: styles.healthyFood, childs: [

            {title: "borsch", code: 223},
            {title: "chicken bouillon", code: 223},
            {title: "soup", childs: [
                {title: "soup with broccoli,", code: 223},
                {title: "soup kharcho", code: 223},
            ]},
        ]},
        {icon: spaguetti, title: "main dishes", className: styles.healthyFood, childs: [
            {title: "paste", childs: [
                {title: "paste bolognese", code: 223},
                {title: "paste carbonara", code: 223},
                {title: "paste with mushrooms in creamy sauce", code: 223},
            ]},
            {title: "dijon chicken fillet with rice and vegetables", code: 223},
        ]},
        {icon: frenchFries, title: "snacks", className: styles.fastFood, childs: [
            {title: "chicken wings", code: 223},
            {title: "potatoes", childs: [
                {title: "country-style potatoes", code: 223},
                {title: "lattice potatoes", code: 223},
            ]},
            {title: "chicken strips", code: 223},
        ]}, 
        {icon: sandwich, title: "sandwiches", className: styles.fastFood, childs: [
            {title: "fresh-sandwich", childs: [
                {title: "fresh-sandwich with tuna", code: 223},
                {title: "fresh-sandwich with chicken", code: 223},
            ]},
            {title: "croissant", childs: [
                {title: "croissant with ham, ", code: 223},
                {title: "croissant with cheese", code: 223},
                {title: "croissant with jamon", code: 223},
            ]},
            {title: "sandwich", childs: [
                {title: "sandwich chicken, ", code: 223},
                {title: "sandwich salami & smoked chicken", code: 223},
                {title: "sandwich tuna", code: 223},
                {title: "sandwich salmon", code: 223},
            ]},
        ]}, 
        {icon: salade, title: "salads", className: styles.healthyFood, childs: [
            {title: "ham", code: 223},
            {title: "cheese", code: 223},
            {title: "jamon", code: 223},
        ]}, 
        {icon: breakfast, title: "breakfasts", className: styles.healthyFood, childs: [
            {title: "scrambled eggs with sausage", code: 223},
            {title: "cheesecakes", code: 223},
        ]}, 
        {icon: coffee, title: "coffee", className: styles.baverages, childs: [
            {title: "with milk", childs: [
                {title: "americano"},
                {title: "cortado"},
                {title: "espresso"},
                {title: "capuccino", childs: [
                    {title: "big", code: 223},
                    {title: "medium", code: 223},
                ]},
                {title: "late", childs: [
                    {title: "big", code: 223},
                    {title: "medium", code: 223},
                ]},
                {title: "flat-white", childs: [
                    {title: "big", code: 223},
                    {title: "medium", code: 223},
                ]},
            ]},
            {title: "without milk", childs: [
                {title: "espresso"},
                {title: "americano"},
            ]},
        ]}, 
        {icon: tea, title: "tea", className: styles.baverages, childs: [
            {title: "natural", childs: [
                {title: "sea buckthorn"},
                {title: "currant"},
                {title: "raspberry"},
                {title: "ginger"},
            ]},
            {title: "bags", childs: [
                {title: "black"},
                {title: "green"},
                {title: "herbal"},
            ]},
        ]},
        {icon: cake, title: "desserts", className: styles.bakery, childs: [
            {title: "ginger"},
            {title: "lemon"},
        ]}, 
        {icon: cupcakesvg, title: "cupcakes", className: styles.bakery, childs: [
            {title: "chocolate"},
            {title: "vanilla"},
            {title: "berry"},
        ]}, 
        {icon: coldCoffee, title: "cold coffee", className: styles.baverages, childs: [
            {title: "americano"},
            {title: "capuccino"},
            {title: "late"},
            {title: "coffee lemonade", childs: [
                {title: "lemon"},
                {title: "cherries"},
                {title: "passion fruit"},
            ]},
        ]}, 
        {icon: coldDrink, title: "lemonades", className: styles.baverages, childs: [
            {title: "lemon"},
            {title: "cherries"},
            {title: "passion fruit"},
        ]},
        {icon: donut, title: "donuts", className: styles.bakery, childs: [
            {title: "rasberry"},
            {title: "chocolate"},
            {title: "condensed milk"},
        ]}, 
        {icon: croissant, title: "own bakery", className: styles.bakery, childs: [
            {title: "chocolate croissant"},
            {title: "apricot croissant"},
            {title: "puff pastry apple & nuts"},
        ]},
    ]

    const [productPage, setProductPage] = useState(Products)
    const [productPageHistory, setProductPageHistory] = useState([productPage])

    // const [currentPageId, setCurrentPageId] = useState(0)
    const [currentPageId, setCurrentPageId] = useState(0)

    useEffect(() => {
        currentPageId > 0
        ? setProductPage(productPageHistory[currentPageId])
        : setProductPage(Products)
        setProductPageHistory(productPageHistory.slice(0, currentPageId+1))
    },[currentPageId])

    const setProductPageHandler = (products) => {
        setProductPageHistory([...productPageHistory, products])
        setCurrentPageId(currentPageId+1)
        setProductPage(products)
    }

    const turnPreview = () => {
        if(currentPageId > 0){
            setCurrentPageId(currentPageId-1)
        }
    }

    const turnHome = () => {
        setCurrentPageId(0)
    }

    return (
        <div className={styles.productCatalog}>
            {productPage.map((product) => (
                <>
                    <Product
                        className={product.className}
                        icon={product.icon}
                        title={product.title}
                        childs={product.childs}
                        code={product.code}
                        addProductCode={addProductCode}
                        setProductPage={setProductPageHandler}
                    />
                </>
            ))}
            {currentPageId > 0?(
                <>
                    <Product
                        title="Preview"
                        className={styles.preview}
                        onClick={turnPreview}
                    />
                    <Product
                        title="Home"
                        className={styles.home}
                        onClick={turnHome}
                    />
                </>
            ):
                ''
            }
        </div>
    );
};

export default ProductCatalog;