import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        add:(state,action)=>{
            state.cart.push(action.payload)
        },
        remove:(state,action)=>{
            return state.cart.cart.filter(product=> product.id !== action.payload)
        }
    }
})

export const {add,remove} =cartSlice.actions;
export default cartSlice.reducer;