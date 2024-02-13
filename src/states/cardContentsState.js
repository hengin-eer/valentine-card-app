import { atom } from "recoil";

export const cardChocoTypeState = atom({
    key: "cardChocoType",
    default: "",
});

export const cardAuthorState = atom({
    key: "cardAuthor",
    default: "",
});

export const cardBodyState = atom({
    key: "cardBody",
    default: "",
});