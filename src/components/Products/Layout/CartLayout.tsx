import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AppDispatch } from "../../../store/store";
import { OrderSummary } from "../../Cart/OrderSummary";
import { cleanCarItemsNotifications } from "../../../store/Cart/CartSlice";
import { Navbar } from "../../Navbar/Navbar";

export const CartLayout = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(cleanCarItemsNotifications());
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col bg-gray-100">
        <div className="flex-grow bg-white ">
          <div>
            <section className="bg-white  antialiased dark:bg-gray-900 md:py-16">
              <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                  Shopping Cart
                </h2>

                <div
                  className="mt-6 sm:mt-8 flex 
          flex-col lg:flex-row lg:items-start gap-8"
                >
                  <div className="grow-[1]">
                    <Outlet />
                  </div>
                  <div className="basis-[300px] shrink-0">
                    <OrderSummary />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="h-12 flex items-center justify-center bg-gray-800 text-white">
        © 2025 Teco-test
      </footer>
    </div>
  );
};
