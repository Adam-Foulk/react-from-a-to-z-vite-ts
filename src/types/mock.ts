import { ECategoryVariant, TProductCatalog } from "./types";

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

export const Products: TProductCatalog = [
  {
    title: "hot dog",
    icon: frenchHotDog,
    variant: ECategoryVariant.fastFood,
    child: [
      {
        title: "light bun",
        child: [
          {
            title: "big",
            child: [
              { title: "milk", id: 1 },
              { title: "smoked", id: 2 },
              { title: "chicken", id: 3 },
            ],
          },
          {
            title: "little",
            child: [
              { title: "milk", id: 4 },
              { title: "smoked", id: 5 },
              { title: "chicken", id: 6 },
            ],
          },
        ],
      },
      {
        title: "dark bun",
        child: [
          {
            title: "big",
            child: [
              { title: "milk", id: 7 },
              { title: "smoked", id: 8 },
              { title: "chicken", id: 9 },
            ],
          },
          {
            title: "little",
            child: [
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
    variant: ECategoryVariant.fastFood,
    child: [
      {
        title: "single",
        child: [
          { title: "cow", id: 13 },
          { title: "chicken", id: 14 },
          { title: "vegan", id: 15 },
        ],
      },
      {
        title: "double",
        child: [
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
    variant: ECategoryVariant.healthyFood,
    child: [
      { title: "borsch", id: 19 },
      { title: "chicken bouillon", id: 20 },
      {
        title: "soup",
        child: [
          { title: "with broccoli,", id: 21 },
          { title: "kharcho", id: 22 },
        ],
      },
    ],
  },
  {
    icon: spaguetti,
    title: "main dish",
    variant: ECategoryVariant.healthyFood,
    child: [
      {
        title: "paste",
        child: [
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
    variant: ECategoryVariant.fastFood,
    child: [
      { title: "chicken wings", id: 27 },
      {
        title: "potatoes",
        child: [
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
    variant: ECategoryVariant.fastFood,
    child: [
      {
        title: "fresh-sandwich",
        child: [
          { title: "tuna", id: 31 },
          { title: "chicken", id: 32 },
        ],
      },
      {
        title: "croissant",
        child: [
          { title: "ham, ", id: 33 },
          { title: "cheese", id: 34 },
          { title: "jamon", id: 35 },
        ],
      },
      {
        title: "sandwich",
        child: [
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
    variant: ECategoryVariant.healthyFood,
    child: [
      { title: "ham", id: 40 },
      { title: "cheese", id: 41 },
      { title: "jamon", id: 42 },
    ],
  },
  {
    icon: breakfast,
    title: "breakfast",
    variant: ECategoryVariant.healthyFood,
    child: [
      { title: "scrambled eggs with sausage", id: 43 },
      {
        title: "cheesecakes",
        child: [
          { title: "lemon", id: 44 },
          { title: "strawberry", id: 84 },
        ],
      },
    ],
  },
  {
    icon: coffee,
    title: "coffee",
    variant: ECategoryVariant.baverages,
    child: [
      {
        title: "with milk",
        child: [
          { title: "americano", id: 80 },
          { title: "cortado", id: 81 },
          { title: "espresso", id: 82 },
          {
            title: "capuccino",
            child: [
              { title: "big", id: 45 },
              { title: "medium", id: 46 },
            ],
          },
          {
            title: "late",
            child: [
              { title: "big", id: 47 },
              { title: "medium", id: 48 },
            ],
          },
          {
            title: "flat-white",
            child: [
              { title: "big", id: 49 },
              { title: "medium", id: 50 },
            ],
          },
        ],
      },
      {
        title: "without milk",
        child: [
          { title: "espresso", id: 51 },
          { title: "americano", id: 52 },
        ],
      },
    ],
  },
  {
    icon: tea,
    title: "tea",
    variant: ECategoryVariant.baverages,
    child: [
      {
        title: "natural",
        child: [
          { title: "sea buckthorn", id: 53 },
          { title: "currant", id: 54 },
          { title: "raspberry", id: 55 },
          { title: "ginger", id: 56 },
        ],
      },
      {
        title: "bags",
        child: [
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
    variant: ECategoryVariant.bakery,
    child: [
      { title: "ginger", id: 60 },
      { title: "lemon", id: 61 },
    ],
  },
  {
    icon: cupcakesvg,
    title: "cupcake",
    variant: ECategoryVariant.bakery,
    child: [
      { title: "chocolate", id: 62 },
      { title: "vanilla", id: 63 },
      { title: "berry", id: 64 },
    ],
  },
  {
    icon: coldCoffee,
    title: "cold coffee",
    variant: ECategoryVariant.baverages,
    child: [
      { title: "americano", id: 65 },
      { title: "capuccino", id: 66 },
      { title: "late", id: 67 },
      {
        title: "coffee lemonade",
        child: [
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
    variant: ECategoryVariant.baverages,
    child: [
      { title: "lemon", id: 71 },
      { title: "cherries", id: 72 },
      { title: "passion fruit", id: 73 },
    ],
  },
  {
    icon: donut,
    title: "donut",
    variant: ECategoryVariant.bakery,
    child: [
      { title: "rasberry", id: 74 },
      { title: "chocolate", id: 75 },
      { title: "condensed milk", id: 76 },
    ],
  },
  {
    icon: croissant,
    title: "own bakery",
    variant: ECategoryVariant.bakery,
    child: [
      { title: "chocolate croissant", id: 77 },
      { title: "apricot croissant", id: 78 },
      { title: "puff pastry apple & nuts", id: 79 },
    ],
  },
];

export const products = [
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
];
