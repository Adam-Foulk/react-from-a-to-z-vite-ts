import styles from "./ProductCatalog.module.less";
import Product, { TCategory } from "./Product/Product";
import { FC, useEffect, useState } from "react";

import frenchHotDog from "res/product-catalog/french-hot-dog.svg";
import burger from "res/product-catalog/burger.svg";
import soupPlate from "res/product-catalog/soup-plate.svg";
import spaguetti from "res/product-catalog/spaguetti.svg";
import frenchFries from "res/product-catalog/french-fries.svg";
import sandwich from "res/product-catalog/sandwich.svg";
import salade from "res/product-catalog/salade.svg";
import breakfast from "res/product-catalog/breakfast.svg";
import coffee from "res/product-catalog/coffee.svg";
import tea from "res/product-catalog/tea.svg";
import cake from "res/product-catalog/cake.svg";
import cupcakesvg from "res/product-catalog/cupcakesvg.svg";
import coldCoffee from "res/product-catalog/cold-coffee.svg";
import coldDrink from "res/product-catalog/cold-drink.svg";
import donut from "res/product-catalog/donut.svg";
import croissant from "res/product-catalog/croissant.svg";
import { TProductCatalog, TProductCatalogItem } from "types/types";

type TProductCatalogProps = {
  addProduct: (id: TProductCatalogItem["id"]) => void;
};

const ProductCatalog: FC<TProductCatalogProps> = ({ addProduct }) => {
  // const Products: TProductCatalog = [
  const Products: TCategory = [
    {
      title: "hot dog",
      icon: frenchHotDog,
      className: styles.fastFood,
      childs: [
        {
          title: "light bun",
          childs: [
            {
              title: "big",
              childs: [
                { title: "milk", id: 1 },
                { title: "smoked", id: 2 },
                { title: "chicken", id: 3 },
              ],
            },
            {
              title: "little",
              childs: [
                { title: "milk", id: 4 },
                { title: "smoked", id: 5 },
                { title: "chicken", id: 6 },
              ],
            },
          ],
        },
        {
          title: "dark bun",
          childs: [
            {
              title: "big",
              childs: [
                { title: "milk", id: 7 },
                { title: "smoked", id: 8 },
                { title: "chicken", id: 9 },
              ],
            },
            {
              title: "little",
              childs: [
                { title: "milk", id: 10 },
                { title: "smoked", id: 11 },
                { title: "chicken", id: 12 },
              ],
            },
          ],
        },
      ],
    },
    {
      icon: burger,
      title: "burger",
      className: styles.fastFood,
      childs: [
        {
          title: "single",
          childs: [
            { title: "cow", id: 13 },
            { title: "chicken", id: 14 },
            { title: "vegan", id: 15 },
          ],
        },
        {
          title: "double",
          childs: [
            { title: "cow", id: 16 },
            { title: "chicken", id: 17 },
            { title: "vegan", id: 18 },
          ],
        },
      ],
    },
    {
      icon: soupPlate,
      title: "first meal",
      className: styles.healthyFood,
      childs: [
        { title: "borsch", id: 19 },
        { title: "chicken bouillon", id: 20 },
        {
          title: "soup",
          childs: [
            { title: "with broccoli,", id: 21 },
            { title: "kharcho", id: 22 },
          ],
        },
      ],
    },
    {
      icon: spaguetti,
      title: "main dish",
      className: styles.healthyFood,
      childs: [
        {
          title: "paste",
          childs: [
            { title: "bolognese", id: 23 },
            { title: "carbonara", id: 24 },
            { title: "with mushrooms in creamy sauce", id: 25 },
          ],
        },
        { title: "dijon chicken fillet with rice and vegetables", id: 26 },
      ],
    },
    {
      icon: frenchFries,
      title: "snack",
      className: styles.fastFood,
      childs: [
        { title: "chicken wings", id: 27 },
        {
          title: "potatoes",
          childs: [
            { title: "country-style", id: 28 },
            { title: "lattice", id: 29 },
          ],
        },
        { title: "chicken strips", id: 30 },
      ],
    },
    {
      icon: sandwich,
      title: "sandwich",
      className: styles.fastFood,
      childs: [
        {
          title: "fresh-sandwich",
          childs: [
            { title: "tuna", id: 31 },
            { title: "chicken", id: 32 },
          ],
        },
        {
          title: "croissant",
          childs: [
            { title: "ham, ", id: 33 },
            { title: "cheese", id: 34 },
            { title: "jamon", id: 35 },
          ],
        },
        {
          title: "sandwich",
          childs: [
            { title: "chicken, ", id: 36 },
            { title: "salami & smoked chicken", id: 37 },
            { title: "tuna", id: 38 },
            { title: "salmon", id: 39 },
          ],
        },
      ],
    },
    {
      icon: salade,
      title: "salad",
      className: styles.healthyFood,
      childs: [
        { title: "ham", id: 40 },
        { title: "cheese", id: 41 },
        { title: "jamon", id: 42 },
      ],
    },
    {
      icon: breakfast,
      title: "breakfast",
      className: styles.healthyFood,
      childs: [
        { title: "scrambled eggs with sausage", id: 43 },
        {
          title: "cheesecakes",
          childs: [
            { title: "lemon", id: 44 },
            { title: "strawberry", id: 84 },
          ],
        },
      ],
    },
    {
      icon: coffee,
      title: "coffee",
      className: styles.baverages,
      childs: [
        {
          title: "with milk",
          childs: [
            { title: "americano", id: 80 },
            { title: "cortado", id: 81 },
            { title: "espresso", id: 82 },
            {
              title: "capuccino",
              childs: [
                { title: "big", id: 45 },
                { title: "medium", id: 46 },
              ],
            },
            {
              title: "late",
              childs: [
                { title: "big", id: 47 },
                { title: "medium", id: 48 },
              ],
            },
            {
              title: "flat-white",
              childs: [
                { title: "big", id: 49 },
                { title: "medium", id: 50 },
              ],
            },
          ],
        },
        {
          title: "without milk",
          childs: [
            { title: "espresso", id: 51 },
            { title: "americano", id: 52 },
          ],
        },
      ],
    },
    {
      icon: tea,
      title: "tea",
      className: styles.baverages,
      childs: [
        {
          title: "natural",
          childs: [
            { title: "sea buckthorn", id: 53 },
            { title: "currant", id: 54 },
            { title: "raspberry", id: 55 },
            { title: "ginger", id: 56 },
          ],
        },
        {
          title: "bags",
          childs: [
            { title: "black", id: 57 },
            { title: "green", id: 58 },
            { title: "herbal", id: 59 },
          ],
        },
      ],
    },
    {
      icon: cake,
      title: "dessert",
      className: styles.bakery,
      childs: [
        { title: "ginger", id: 60 },
        { title: "lemon", id: 61 },
      ],
    },
    {
      icon: cupcakesvg,
      title: "cupcake",
      className: styles.bakery,
      childs: [
        { title: "chocolate", id: 62 },
        { title: "vanilla", id: 63 },
        { title: "berry", id: 64 },
      ],
    },
    {
      icon: coldCoffee,
      title: "cold coffee",
      className: styles.baverages,
      childs: [
        { title: "americano", id: 65 },
        { title: "capuccino", id: 66 },
        { title: "late", id: 67 },
        {
          title: "coffee lemonade",
          childs: [
            { title: "lemon", id: 68 },
            { title: "cherries", id: 69 },
            { title: "passion fruit", id: 70 },
          ],
        },
      ],
    },
    {
      icon: coldDrink,
      title: "lemonade",
      className: styles.baverages,
      childs: [
        { title: "lemon", id: 71 },
        { title: "cherries", id: 72 },
        { title: "passion fruit", id: 73 },
      ],
    },
    {
      icon: donut,
      title: "donut",
      className: styles.bakery,
      childs: [
        { title: "rasberry", id: 74 },
        { title: "chocolate", id: 75 },
        { title: "condensed milk", id: 76 },
      ],
    },
    {
      icon: croissant,
      title: "own bakery",
      className: styles.bakery,
      childs: [
        { title: "chocolate croissant", id: 77 },
        { title: "apricot croissant", id: 78 },
        { title: "puff pastry apple & nuts", id: 79 },
      ],
    },
  ];

  const [productPage, setProductPage] = useState<TProductCatalog>(Products);
  const [productPageHistory, setProductPageHistory] = useState<
    TProductCatalog[]
  >([productPage]);

  const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);

  useEffect(() => {
    currentPageNumber > 0
      ? setProductPage(productPageHistory[currentPageNumber])
      : setProductPage(Products);
    setProductPageHistory(productPageHistory.slice(0, currentPageNumber + 1));
  }, [currentPageNumber]);

  const setProductPageHandler = (products: TProductCatalog) => {
    setProductPageHistory([...productPageHistory, products]);
    setCurrentPageNumber(currentPageNumber + 1);
    setProductPage(products);
  };

  const turnPreview = () => {
    if (currentPageNumber > 0) {
      setCurrentPageNumber(currentPageNumber - 1);
    }
  };

  const turnHome = () => {
    setCurrentPageNumber(0);
  };

  return (
    <div className={styles.productCatalog}>
      {productPage.map((product: TProductCatalogItem) => (
        <>
          <Product
            product={product}
            addProductCode={addProduct}
            setProductPage={setProductPageHandler}
          />
        </>
      ))}
      {currentPageNumber > 0 ? (
        <>
          <Product
            // product={{ title: "Preview", className: styles.preview }}
            product={{
              title: "Preview",
              className: styles.preview,
            }}
            onClick={turnPreview}
          />
          <Product
            product={{ title: "Home", className: styles.home }}
            onClick={turnHome}
          />
        </>
      ) : null}
    </div>
  );
};

export default ProductCatalog;
