import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { CartItem } from "../components/Cart/CartItem";
import { EmptyCart } from "../components/Cart/EmptyCart";

export const ShoppingCart = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  return (
    <div className="flex-1 space-y-6">
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.product.id}
            description={item.product.description}
            title={item.product.title}
            price={item.product.price}
            quantity={item.quantity}
            image={item.product.image}
          />
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};
