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

const ProductCatalog = ({addProduct}) => {

    const Products = [
        {icon: frenchHotDog, title: "hot dog", className: styles.fastFood, childs: [
            {title: "light bun", childs: [
                {title: "big", childs: [
                    {title: "milk", code: 1},
                    {title: "smoked", code: 2},
                    {title: "chicken", code: 3},
                ]},
                {title: "little", childs: [
                    {title: "milk", code: 4},
                    {title: "smoked", code: 5},
                    {title: "chicken", code: 6},
                ]}
            ]},
            {title: "dark bun", childs: [
                {title: "big", childs: [
                    {title: "milk", code: 7},
                    {title: "smoked", code: 8},
                    {title: "chicken", code: 9},
                ]},
                {title: "little", childs: [
                    {title: "milk", code: 10},
                    {title: "smoked", code: 11},
                    {title: "chicken", code: 12},
                ]}
            ]},
        ]},
        {icon: burger, title: "burger", className: styles.fastFood, childs: [
            {title: "single", childs: [
                {title: "cow", code: 13},
                {title: "chicken", code: 14},
                {title: "vegan", code: 15},
            ]},
            {title: "double", childs: [
                {title: "cow", code: 16},
                {title: "chicken", code: 17},
                {title: "vegan", code: 18},
            ]},
        ]},
        {icon: soupPlate, title: "first meal", className: styles.healthyFood, childs: [

            {title: "borsch", code: 19},
            {title: "chicken bouillon", code: 20},
            {title: "soup", childs: [
                {title: "with broccoli,", code: 21},
                {title: "kharcho", code: 22},
            ]},
        ]},
        {icon: spaguetti, title: "main dish", className: styles.healthyFood, childs: [
            {title: "paste", childs: [
                {title: "bolognese", code: 23},
                {title: "carbonara", code: 24},
                {title: "with mushrooms in creamy sauce", code: 25},
            ]},
            {title: "dijon chicken fillet with rice and vegetables", code: 26},
        ]},
        {icon: frenchFries, title: "snack", className: styles.fastFood, childs: [
            {title: "chicken wings", code: 27},
            {title: "potatoes", childs: [
                {title: "country-style", code: 28},
                {title: "lattice", code: 29},
            ]},
            {title: "chicken strips", code: 30},
        ]}, 
        {icon: sandwich, title: "sandwich", className: styles.fastFood, childs: [
            {title: "fresh-sandwich", childs: [
                {title: "tuna", code: 31},
                {title: "chicken", code: 32},
            ]},
            {title: "croissant", childs: [
                {title: "ham, ", code: 33},
                {title: "cheese", code: 34},
                {title: "jamon", code: 35},
            ]},
            {title: "sandwich", childs: [
                {title: "chicken, ", code: 36},
                {title: "salami & smoked chicken", code: 37},
                {title: "tuna", code: 38},
                {title: "salmon", code: 39},
            ]},
        ]}, 
        {icon: salade, title: "salad", className: styles.healthyFood, childs: [
            {title: "ham", code: 40},
            {title: "cheese", code: 41},
            {title: "jamon", code: 42},
        ]}, 
        {icon: breakfast, title: "breakfast", className: styles.healthyFood, childs: [
            {title: "scrambled eggs with sausage", code: 43},
            {title: "cheesecakes", childs: [
                {title: "lemon", code: 44},
                {title: "strawberry", code: 84}
            ]},
        ]}, 
        {icon: coffee, title: "coffee", className: styles.baverages, childs: [
            {title: "with milk", childs: [
                {title: "americano", code: 80},
                {title: "cortado", code: 81},
                {title: "espresso", code: 82},
                {title: "capuccino", childs: [
                    {title: "big", code: 45},
                    {title: "medium", code: 46},
                ]},
                {title: "late", childs: [
                    {title: "big", code: 47},
                    {title: "medium", code: 48},
                ]},
                {title: "flat-white", childs: [
                    {title: "big", code: 49},
                    {title: "medium", code: 50},
                ]},
            ]},
            {title: "without milk", childs: [
                {title: "espresso", code: 51},
                {title: "americano", code: 52},
            ]},
        ]}, 
        {icon: tea, title: "tea", className: styles.baverages, childs: [
            {title: "natural", childs: [
                {title: "sea buckthorn", code: 53},
                {title: "currant", code: 54},
                {title: "raspberry", code: 55},
                {title: "ginger", code: 56},
            ]},
            {title: "bags", childs: [
                {title: "black", code: 57},
                {title: "green", code: 58},
                {title: "herbal", code: 59},
            ]},
        ]},
        {icon: cake, title: "dessert", className: styles.bakery, childs: [
            {title: "ginger", code: 60},
            {title: "lemon", code: 61},
        ]}, 
        {icon: cupcakesvg, title: "cupcake", className: styles.bakery, childs: [
            {title: "chocolate", code: 62},
            {title: "vanilla", code: 63},
            {title: "berry", code: 64},
        ]}, 
        {icon: coldCoffee, title: "cold coffee", className: styles.baverages, childs: [
            {title: "americano", code: 65},
            {title: "capuccino", code: 66},
            {title: "late", code: 67},
            {title: "coffee lemonade", childs: [
                {title: "lemon", code: 68},
                {title: "cherries", code: 69},
                {title: "passion fruit", code: 70},
            ]},
        ]}, 
        {icon: coldDrink, title: "lemonade", className: styles.baverages, childs: [
            {title: "lemon", code: 71},
            {title: "cherries", code: 72},
            {title: "passion fruit", code: 73},
        ]},
        {icon: donut, title: "donut", className: styles.bakery, childs: [
            {title: "rasberry", code: 74},
            {title: "chocolate", code: 75},
            {title: "condensed milk", code: 76},
        ]}, 
        {icon: croissant, title: "own bakery", className: styles.bakery, childs: [
            {title: "chocolate croissant", code: 77},
            {title: "apricot croissant", code: 78},
            {title: "puff pastry apple & nuts", code: 79},
        ]},
    ]

    const [productPage, setProductPage] = useState(Products)
    const [productPageHistory, setProductPageHistory] = useState([productPage])

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
                        addProductCode={addProduct}
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
                null
            }
        </div>
    );
};

export default ProductCatalog;