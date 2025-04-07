import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../api/type/Product";

const initialState = {
    products: [] as Product[],
    loading: false,
    error:null
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
  startLoading: (state) => {
    state.loading = true;
    state.error = null;
  },
  setError: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  setProducts: (state, action) => {
    state.loading = false;
    state.products = action.payload;
    state.error = null;
  },
  },
});

export const {
    startLoading,
    setProducts,
    setError
} = productSlice.actions;
export default productSlice.reducer;