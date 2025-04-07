import axiosInstance from "../../api/AxiosConfig";
import { AppDispatch } from "../store";
import { setError, setProducts, startLoading } from "./ProductSlice";


export const startLoadingProducts = () => {
    return async (dispatch:AppDispatch) => {
      dispatch(startLoading());
      try {
        const response = await axiosInstance.get('/products'); // URL de tu API
        console.log(
            response.data
        );
        
        dispatch(setProducts(response.data));
      } catch (error) {
        dispatch(setError(error.message || 'Error desconocido'));
      }
    };
  };