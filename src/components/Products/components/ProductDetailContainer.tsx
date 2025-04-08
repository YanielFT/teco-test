import { useDispatch } from "react-redux";
import { Product } from "../../../api/type/Product";
import { AddToCartButton } from "../../Cart/Ui/AddToCartButton";
import { addProductToCart } from "../../../store/Cart/CartSlice";

export const ProductDetailContainer = ({
  image,
  title,
  price,
  description,
  id,
  category,
}: Product) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    const product = { id, title, price, image, category, description };
    dispatch(
      addProductToCart({
        id,
        product: product,
        quantity: 1,
      })
    );
  };

  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img className="w-full max-h-[650px]" src={image} alt={title} />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white mb-3">
                ${price}
              </p>
            </div>

            <AddToCartButton onClick={addToCartHandler} />

            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <div className="px-6">
              <p className="mb-6 text-gray-500">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
