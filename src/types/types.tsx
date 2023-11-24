import { EState } from "components/MainPage/FillingPlaces/FillingPlace/FillingPlace";

export type TBonusCard = {
  id: number;
  name: string;
  phoneNumber: string;
  bonuses: number;
};

export enum EActionVariant {
  preview = "preview",
  home = "home",
}

export enum ECategoryVariant {
  fastFood = "fastFood",
  healthyFood = "healthyFood",
  bakery = "bakery",
  baverages = "baverages",
}

export type TProduct = {
  title: string;
  icon?: string;
  id: number;
};

export type TCategory = {
  title: string;
  icon?: string;
  variant?: ECategoryVariant;
  child: (TCategory | TProduct)[];
};

export type TProductCatalog = TProductCatalogItem[];

export type TProductCatalogItem = TProduct | TCategory;

export type TOrderItem = {
  id: number;
  name: string;
  remainder: number;
  quantity: number;
  price: number;
  discount: number;
  sum: number;
};

export type TOrder = {
  title: number;
  content: TOrderItem[];
};

export type TActiveItemNumber = number;
export type TActiveOrderNumber = number;

export type TPhoneNumber = string;

export type TPlace = {
  placeNumber: number;
  state: EState;
  fuelType: undefined;
  toFill: undefined;
  filled: undefined;
  price: undefined;
};
