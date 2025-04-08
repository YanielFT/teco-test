import { BsCart2 } from "react-icons/bs";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <BsCart2 size={45} />
      <h1 className="text-2xl">Cart is empty</h1>
      <p className="text-gray-500 text-md">
        Your cart is empty. Add some products to your cart to get started.
      </p>
    </div>
  );
};
