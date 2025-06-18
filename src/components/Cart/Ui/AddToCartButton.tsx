import { BsCart } from "react-icons/bs";

interface Props {
  onClick?: () => void;
}

export const AddToCartButton = ({ onClick }: Props) => {
  return (
    <div className="sm:gap-4 sm:items-center sm:flex">
      <button
        onClick={() => onClick?.()}
        className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
        role="button"
      >
        <BsCart size={16} className="mr-2" />
        Add to Cart
      </button>
    </div>
  );
};
