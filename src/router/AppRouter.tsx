import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsPage } from "../page/ProductsPage";
import ProductsLayout from "../components/Products/Layout/ProductsLayout";
import { ProductDetailPage } from "../page/ProductDetailPage";
import { NotFoundPage } from "../page/404";
import { CheckoutPage } from "../page/CheckoutPage";
import { CartLayout } from "../components/Products/Layout/CartLayout";
import { ShoppingCart } from "../page/ShoppingCartPage";
import { CheckoutComplete } from "../page/CheckoutComplete";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsLayout />}>
        <Route index element={<ProductsPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="checkout-complete" element={<CheckoutComplete />} />
      </Route>
      <Route path="cart" element={<CartLayout />}>
        <Route index element={<ShoppingCart />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
      <Route path="not-found" element={<NotFoundPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
