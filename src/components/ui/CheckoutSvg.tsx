import { FaCheck } from "react-icons/fa6";
const OrderCompleteIllustration = () => {
  return (
    <div className="w-full flex flex-col 
    items-center justify-center h-full gap-4">
      <div className="w-16 h-16 sm:w-56 sm:h-56">
        <FaCheck className="w-full h-full" />
      </div>

      <h1 className="text-2xl font-semibold -translate-y-8">
        Order Completed!
      </h1>
    </div>
  );
};

export default OrderCompleteIllustration;
