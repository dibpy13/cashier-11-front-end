import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/productSlice"
import categoryReducer from "../reducers/categorySlice"

export default configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer
    }
})
