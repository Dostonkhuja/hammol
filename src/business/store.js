import {configureStore} from '@reduxjs/toolkit'
import categorysSL from "./categorysSL";
import productsSL from "./productsSL";
import productSL from "./productSL";

export const store = configureStore({
    reducer: {
        categorys:categorysSL,
        products:productsSL,
        product:productSL,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
})