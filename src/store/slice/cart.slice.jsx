import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './IsLoading.slice';

export const cartSlice = createSlice({
    name: 'cartslice',
    initialState: [],
    reducers: {
        setCart : (state, action)=>{
            const setCart = action.payload
            return setCart
        }
    }
})

export const getCartThunk =()=>dispatch=>{
    dispatch(setIsLoading(true))
    return axios.get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
    .then(res=>dispatch(setCart(res.data.data.cart.products)))
    .catch(error => console.log(error.response))
    .finally(()=>dispatch(setIsLoading(false)))
    
}

export const addCartThunk = (purchase) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/cart", purchase, getConfig())
        .then(() => dispatch(getCartThunk()))
        .catch(error=>console.log(error.response))
        .finally(() => dispatch(setIsLoading(false)));
}

export const purchaseThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post("https://ecommerce-api-react.herokuapp.com/api/v1/purchases",{}, getConfig())
        .then(() => dispatch(setCart([])))
        .finally(() => dispatch(setIsLoading(false)))
}



export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
