import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Products/ProductSlice";
import cartSlice from "./Cart/CartSlice";

export const store = configureStore({
  reducer: { products: productSlice, cart: cartSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
