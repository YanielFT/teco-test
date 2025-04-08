import { Product } from "./Product";

export type CartItem = {
  id: number;
  product: Product;
  quantity: number;
};

export type CartState = {
  cart: CartItem[];
  finalPrice: number;
  unSeenCartItems: number;
};

export interface CartItemProduct {
  image: string;
  title: string;
  description: string;
  id: number;
  price: number;
  quantity: number;
  category?: string;
}
