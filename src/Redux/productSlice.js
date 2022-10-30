import { createSlice } from "@reduxjs/toolkit";

export const productSlice= createSlice({
    name:"product",
    initialState:{
        data:[],
    },
    reducers:{
        setData:(state,action)=>{
            state.data=(action.payload)
        },
    }
})

export const {setData} =productSlice.actions;
export default productSlice.reducer;

export function fetchProducts(){
   return async function fetchThunkProduct(dispatch,getState){
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        dispatch(setData(data));
    } catch (err) {
        console.log(err);
    }
   }
}
