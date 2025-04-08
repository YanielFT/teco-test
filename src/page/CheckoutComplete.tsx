import { useDispatch } from "react-redux";
import OrderCompleteIllustration from "../components/ui/CheckoutSvg";
import Confetti from "react-confetti";
import { AppDispatch } from "../store/store";
import { useEffect } from "react";
import { clearCart } from "../store/Cart/CartSlice";

export const CheckoutComplete = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    return () => {
      dispatch(clearCart());
    };
  }, [dispatch]);

  return (
    <div className="w-lg">
      <OrderCompleteIllustration />
      <Confetti gravity={0.2} tweenDuration={5000} recycle={false} />
    </div>
  );
};
