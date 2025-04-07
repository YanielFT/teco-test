import { Outlet } from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar";

const ProductsLayout = () => {
  return (
<div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-grow px-4 sm:px-6 md:px-8 bg-gray-100">
    <div className="text-center">
      <Outlet />
    </div>
  </main>
  <footer className="h-12 flex items-center justify-center bg-gray-800 text-white">
    © 2025 Teco-test
  </footer>
</div>

  );
};

export default ProductsLayout;