import { CartItemProduct } from "../../api/type/Cart";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import {
  addProductToCart,
  removeProduct,
  removeProductFromCart,
} from "../../store/Cart/CartSlice";
import { Product } from "../../api/type/Product";

export const CartItem = ({
  image,
  title,
  price,
  quantity,
  description,
  id,
}: CartItemProduct) => {
  const dispatch = useDispatch<AppDispatch>();
  const incrementHanlder = () => {
    const product: Product = { image, title, price, description, id };
    dispatch(
      addProductToCart({
        id,
        product,
        quantity: 1,
        NotNotification: true,
      })
    );
  };

  const decrementHanlder = () => {
    dispatch(removeProductFromCart(id));
  };

  const removeHandler = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm ">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <a href="#" className="shrink-0 md:order-1">
          <img className="h-20 w-20 " src={image} alt="imac image" />
          <img
            className="hidden h-20 w-20 "
            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
            alt="imac image"
          />
        </a>

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              id="decrement-button-2"
              data-input-counter-decrement="counter-input-2"
              onClick={decrementHanlder}
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="counter-input-2"
              data-input-counter
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 "
              placeholder=""
              value={quantity}
              required
            />
            <button
              type="button"
              id="increment-button-2"
              onClick={incrementHanlder}
              data-input-counter-increment="counter-input-2"
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
            >
              <svg
                className="h-2.5 w-2.5 text-gray-900 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900 ">
              ${price * quantity}
            </p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <a
            href="#"
            className="text-base font-medium text-gray-900 hover:underline "
          >
            {title}
          </a>
          <p className="text-sm font-normal text-gray-500 ">
            {description}
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={removeHandler}
              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline "
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
