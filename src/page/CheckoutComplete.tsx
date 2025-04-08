import { useDispatch, useSelector } from "react-redux";
import OrderCompleteIllustration from "../components/ui/CheckoutSvg";
import Confetti from "react-confetti";
import { AppDispatch, RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { clearCart } from "../store/Cart/CartSlice";

export const CheckoutComplete = () => {
  const { finalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);
  if (finalPrice === 0) {
    return <Navigate to="/" />;
  }
  return (
    <div className="w-lg">
      <OrderCompleteIllustration />
      <Confetti gravity={0.2} tweenDuration={5000} recycle={false} />
    </div>
  );
};
