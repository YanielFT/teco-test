import { configureStore } from "@reduxjs/toolkit";
import productSlice  from "./Products/ProductSlice";

export const store = configureStore({
  reducer: {products:productSlice},
});

export type AppDispatch = typeof store.dispatch;
export default store;