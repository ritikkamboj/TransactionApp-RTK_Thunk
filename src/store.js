import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./slice/bankSlice";

export const store = configureStore({
    reducers: {
        bank: bankSlice
    }
})