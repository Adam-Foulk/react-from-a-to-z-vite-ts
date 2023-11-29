import { products } from "types/mock";
import {
  TActiveItemNumber,
  TActiveOrderNumber,
  TBonusCard,
  TOrder,
} from "types/types";
import { create } from "zustand";

export const useMainPage = create((set, get) => ({
  bonusCard: {
    id: 123,
    name: "Adam",
    phoneNumber: "0966293123",
    bonuses: 3.1,
  },
  setBonusCard: (bonusCard: TBonusCard) => set({ bonusCard: bonusCard }),
  hint: "welcome to the station!",
  setHint: (hint: string) => set({ hint: hint }),
  orders: [{ title: 0, content: [] }],
  setOrders: (orders: TOrder[]) => set({ orders: orders }),
  activeOrderNumber: 0,
  setActiveOrderNumber: (value: TActiveOrderNumber) =>
    set({
      activeOrderNumber: value,
    }),
  activeItemNumber: 0,
  setActiveItemNumber: (value: TActiveItemNumber) =>
    set({
      activeItemNumber: value,
    }),
  isActiveProductCatalog: false,
  setIsActiveProductCatalog: (value: boolean) =>
    set({
      isActiveProductCatalog: value,
    }),

  addProduct: (code: number | undefined) => {
    const newProduct = products.find((product) => product.id === code);
    if (!newProduct) {
      console.log(`product with code: ${code} not founded!`);
      return;
    }

    const newOrder: TOrder = get().orders[get().activeOrderNumber];
    let newActiveItemNumber: TActiveItemNumber = get().activeItemNumber;
    const newOrders: TOrder[] = [...get().orders];

    const foundedProductId = newOrder.content.findIndex(
      (product) => product.id === newProduct.id
    );

    if (foundedProductId >= 0) {
      const foundedProduct = newOrder.content[foundedProductId];

      foundedProduct.quantity++;
      foundedProduct.sum =
        (foundedProduct.price - foundedProduct.discount) *
        foundedProduct.quantity;

      newActiveItemNumber = foundedProductId;
    } else {
      newOrder.content.push({
        ...newProduct,
        quantity: 1,
        sum: newProduct.price - newProduct.discount,
      });
      newActiveItemNumber = newOrder.content.length - 1;
    }

    let totalSum: number = 0;
    for (const product of newOrder.content) {
      totalSum += product.sum;
    }
    newOrder.title = totalSum;

    newOrders[get().activeOrderNumber] = newOrder;

    get().setOrders(newOrders);
    get().setActiveItemNumber(newActiveItemNumber);
  },
}));
