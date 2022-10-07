import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { addCartThunk, getCartThunk, setCart } from './cart.slice';
import { setIsLoading } from './IsLoading.slice';

export const PurchasesSlice = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (state, action)=>{
            const purchases = action.payload
            return purchases

        }
    }
})

export const getPurchasesThunk =()=>dispatch=>{
    dispatch(setIsLoading(true))
     return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/purchases", getConfig())
    .then(res=>dispatch(setPurchases(res.data.data.purchases)))
    .finally(()=>dispatch(setIsLoading(false)))
}



export const { setPurchases } = PurchasesSlice.actions;

export default PurchasesSlice.reducer;
