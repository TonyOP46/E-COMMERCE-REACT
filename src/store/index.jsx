import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './slice/cart.slice'
import  IsLoadingSlice from './slice/IsLoading.slice'
import  ProductSlice  from './slice/Products.slice'
import  PurchasesSlice  from './slice/Purchases.slice'

export default configureStore({
    reducer: {
        IsLoading: IsLoadingSlice,
        products: ProductSlice,
        purchases: PurchasesSlice,
        Cart: cartSlice
    }
})
