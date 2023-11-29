import { create } from "zustand";

export const useInputNumber = create((set, get) => ({
  value: "",
  display: false,
  setValue: (value: string) =>
    set({
      value: value,
    }),
  addValue: (value: string) =>
    set((state: { value: string }) => {
      const newValue = value;

      return { value: state.value + newValue };
    }),
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
  enterHandler: (setNumber) =>
    set((state) => {
      setNumber(state.value || "0");
      // state.display = false
      return { display: false };
    }),
}));
