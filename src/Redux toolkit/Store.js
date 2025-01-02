import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Redux toolkit/Reducer"

const store = configureStore({
    reducer:{
        main:CartSlice
    }
})

export default store