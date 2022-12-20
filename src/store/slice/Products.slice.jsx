import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './IsLoading.slice';

export const ProductSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts : (state, action) =>{
            const products = action.payload;
            return products;
        }
    }
})

export const getProductsThunk=()=>dispatch=>{
    dispatch(setIsLoading(true))
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res=>dispatch(setProducts(res.data.data.products)))
    .finally(()=>dispatch(setIsLoading(false)))
}

export const { setProducts } = ProductSlice.actions;

export default ProductSlice.reducer;
