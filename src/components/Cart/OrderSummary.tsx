import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { parseToFormat } from "../../helper";
import { Link, useLocation } from "react-router-dom";

export const OrderSummary = () => {
  const { finalPrice } = useSelector((state: RootState) => state.cart);
  const finalPriceFormatted = parseToFormat(finalPrice) || 0;
  const location = useLocation();  
  const isCheckout = location.pathname === "/checkout" || location.pathname === "/cart/checkout";
  
  return (
    <div className="w-full space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm -800 sm:p-6">
      <p className="text-xl font-semibold text-gray-900 ">
        Order summary
      </p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-500 ">
              Original price
            </dt>
            <dd className="text-base font-medium text-gray-900 ">
              ${finalPriceFormatted}
            </dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 ">
          <dt className="text-base font-bold text-gray-900 ">
            Total
          </dt>
          <dd className="text-base font-bold text-gray-900 ">
            ${finalPriceFormatted}
          </dd>
        </dl>
      </div>


      {!isCheckout && finalPrice > 0 && (
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500">
            {" "}
            or{" "}
          </span>
          <Link
            to="checkout"
            title=""
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
          >
            checkout
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};
