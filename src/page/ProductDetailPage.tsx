import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { getProduct } from "../store/Products/thunks";
import { ProductDetailContainer } from "../components/Products/components/ProductDetailContainer";
import { Loading } from "../components/ui/Loading";
import { enqueueSnackbar } from "notistack";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { product, loading, error } = useSelector(
    (state: RootState) => state.products
  );
  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
    }
  }, []);

  useEffect(() => {
    if (!error) return;
    enqueueSnackbar(error, { variant: "error" });
  }, [error]);

  if (!product && error) {
    return <Navigate to={"/not-found"} />;
  }

  return (
    <>
      {loading && <Loading />}
      {!loading && product && (
        <ProductDetailContainer
          id={product.id}
          category={product.category}
          title={product?.title}
          image={product.image}
          description={product?.description}
          price={product.price}
        />
      )}
    </>
  );
};
