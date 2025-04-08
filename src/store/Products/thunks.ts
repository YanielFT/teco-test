import axiosInstance from "../../api/AxiosConfig";
import { AppDispatch } from "../store";
import {
  setError,
  setProduct,
  setProducts,
  startLoading,
} from "./ProductSlice";

export const startLoadingProducts = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoading());
    try {
      const response = await axiosInstance.get("/products"); // URL de tu API

      dispatch(setProducts(response.data));
    } catch (error) {
      dispatch(setError(error.message || "Error desconocido"));
    }
  };
};

export const getProduct = (id: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(startLoading());
    try {
      console.log({ id });

      const response = await axiosInstance.get(`/products/${id}`);
      if (!response.data) {
        throw new Error("No se encontró el producto");
      }
      dispatch(setProduct(response.data));
    } catch (error) {
      dispatch(setError(error.message || "Error desconocido"));
    }
  };
};
