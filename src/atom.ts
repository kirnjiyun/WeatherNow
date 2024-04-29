import { atom } from "recoil";

export const modalOpenState = atom<boolean>({
    key: "modalOpenState",
    default: false,
});

export const latState = atom<number>({
    key: "latState",
    default: 0,
});

export const lonState = atom<number>({
    key: "lonState",
    default: 0,
});

export const selectedCityState = atom<string | null>({
    key: "selectedCityState",
    default: null,
});

export const cityListState = atom<string[]>({
    key: "cityListState",
    default: [],
});
