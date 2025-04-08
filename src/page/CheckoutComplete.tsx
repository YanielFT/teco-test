import { useSelector } from "react-redux";
import OrderCompleteIllustration from "../components/ui/CheckoutSvg";
import Confetti from "react-confetti";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";

export const CheckoutComplete = () => {
  const { finalPrice } = useSelector((state: RootState) => state.cart);

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
