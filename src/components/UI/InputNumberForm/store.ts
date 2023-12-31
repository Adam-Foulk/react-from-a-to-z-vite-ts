import { create } from "zustand";

export const useInputNumber = create((set, get) => ({
  value: "",
  display: false,
  setValue: (value: string) =>
    set({
      value: value,
    }),
  setNumber: (number: string) => void,
  setSetNumber: (setNumber: (number: string) => void) => set({setNumber: setNumber}),
  addValue: (value: string) => set({ value: get().value + value }),
  setDisplay: (value: boolean) =>
    set({
      display: value,
    }),
  clearHandler: () =>
    set({
      value: "",
    }),
  cancelHandler: () =>
    set({
      display: false,
    }),
}));
