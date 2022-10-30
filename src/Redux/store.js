import { configureStore,combineReducers  } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const reducer= combineReducers({
   product:productReducer,
   cart:cartReducer
})

export const store= configureStore({reducer});

export default store;