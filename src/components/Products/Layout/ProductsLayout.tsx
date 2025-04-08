import { Outlet } from "react-router-dom";
import { Navbar } from "../../Navbar/Navbar";

const ProductsLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col bg-white">
        <div className="flex-grow  flex mx-auto">
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
