import { EState } from "components/MainPage/FillingPlaces/FillingPlace/FillingPlace";

export type TBonusCard = {
  id: number;
  name: string;
  phoneNumber: string;
  bonuses: number;
};

export type TProductCatalogItem = {
  title: string;
  icon?: string;
  id?: number;
  className?: string;
  childs?: TProductCatalogItem[];
};

export type TProductCatalog = TProductCatalogItem[];

export type TProduct =
  | undefined
  | {
      readonly id: number;
      readonly name: string;
      remainder: number;
      readonly price: number;
      discount: number;
    };

export type TOrderItem = TProduct & {
  quantity: number;
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
