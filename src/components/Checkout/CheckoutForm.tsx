import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CheckoutSchema } from "./Checkout.schema";
import { InputField } from "../ui/InputField";
import { useNavigate } from "react-router-dom";

type FormData = {
  fullName: string;
  address: string;
  email: string;
  cardNumber: string;
};

export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(CheckoutSchema),
  });

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/checkout-complete");
  };

  return (
    <form
      className="w-full px-8"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <InputField
        label="Your email"
        register={register("email")}
        id="email"
        error={errors.email}
        placeholder="name@flowbite.com"
      />

      <InputField
        label="Full Name"
        register={register("fullName")}
        id="name"
        error={errors.fullName}
        placeholder="Yaniel Alejandro Fuentes"
      />

      <InputField
        label="Address"
        register={register("address")}
        id="address"
        error={errors.address}
        placeholder="Calle 123, Ciudad, Pais"
      />

      <InputField
        label="Card Number"
        register={register("cardNumber")}
        id="cardNumber"
        error={errors.cardNumber}
        placeholder="1234 5678 9012 3456"
      />

      <button
        disabled={!isValid}
        type="submit"
        className="text-white disabled:bg-blue-200 disabled:text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};
