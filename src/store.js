import { configureStore } from "@reduxjs/toolkit";
import bankSlice from "./slice/bankSlice";

export const store = configureStore({
    reducer: {
        bank: bankSlice
    }
})