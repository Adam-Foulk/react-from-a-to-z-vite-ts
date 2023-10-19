import {create} from 'zustand'

export const useInputNumber = create(set => ({
    value : '',
    display: false,
    setValue: (value) => set({
        value: value
    }),
    addValue: (value) => set(state => {
        const newValue = value

        return {value: state.value + newValue}
    }),
    setDisplay: (value) => set({
        display: value
    }),
    clearHandler: () => set({
        value: ''
    }),
    cancelHandler: () => set({
        display: false
    }),
    enterHandler: (setNumber) => set(state => {
        setNumber(state.value || '0')
        // state.display = false
        return {display: false}
    }),
}))