import { atom } from "recoil";

export const modalOpenState = atom({
    key: "modalOpenState",
    default: false,
});

export const latState = atom({
    key: "latState",
    default: 0,
});

export const lonState = atom({
    key: "lonState",
    default: 0,
});

export const selectedCityState = atom({
    key: "selectedCityState",
    default: null,
});
export const cityListState = atom({
    key: "cityListState",
    default: [],
});
