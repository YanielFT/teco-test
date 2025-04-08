import React, { useEffect } from "react";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface CartButtonProps {
  onClick?: () => void;
}
export const CartButton = ({ onClick }: CartButtonProps) => {
  const { unSeenCartItems } = useSelector((state: RootState) => state.cart);
  const [animate, setAnimate] = React.useState(false);
  useEffect(() => {
    if (unSeenCartItems > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 100); // Duración de la animación
      return () => clearTimeout(timeout);
    }
  }, [unSeenCartItems]);

  return (
    <button
      type="button"
      onClick={() => onClick?.()}
      className="relative z-0 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      {unSeenCartItems > 0 && (
        <span
          className={`absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-1 -right-1 
            transform transition-transform ${
              animate ? "scale-150" : "scale-100"
            }`}
        >
          {unSeenCartItems}
        </span>
      )}

      <BsCart2 size={25} />
    </button>
  );
};
