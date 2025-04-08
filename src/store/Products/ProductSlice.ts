import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../api/type/Product";

const initialState = {
  products: [] as Product[],
  filteredProducts: [] as Product[],
  searchQuery: "",
  product: null as Product | null,
  loading: false,
  error: null,
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
    setProduct: (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = null;
    },
    searchProducts: (state, action) => {
      state.searchQuery = action.payload.toLowerCase();
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const {
  startLoading,
  searchProducts,
  setProducts,
  setProduct,
  setError,
} = productSlice.actions;
export default productSlice.reducer;
