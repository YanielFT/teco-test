import { Link, useNavigate } from "react-router-dom";
import { CartButton } from "../ui/CartButton";

export const Navbar = () => {
  const navigate = useNavigate();
  const toCart = () => {
    navigate("/cart");
  };
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Link to={"/"} className="self-center text-2xl font-semibold whitespace-nowrap ">
            TecoShop
          </Link>
        </a>
        <CartButton onClick={toCart} />
      </div>
    </nav>
  );
};
