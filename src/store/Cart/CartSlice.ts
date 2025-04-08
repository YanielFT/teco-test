import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../api/type/Cart";

const initialState: CartState = {
  cart: [] as CartItem[],
  finalPrice: 0,
  unSeenCartItems: 0,
};

interface addProductToCartPayload extends CartItem {
  NotNotification?: null | boolean;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<addProductToCartPayload[]>) => {
      state.cart = action.payload;
    },
    addProductToCart: (
      state,
      action: PayloadAction<addProductToCartPayload>
    ) => {
      const payload = {
        ...action.payload,
        NotNotification: action.payload.NotNotification ?? false,
      };
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }

      state.finalPrice += payload.product.price;
      console.log(payload.NotNotification);

      if (!payload?.NotNotification) state.unSeenCartItems += 1;
    },

    cleanCarItemsNotifications: (state) => {
      state.unSeenCartItems = 0;
    },

    removeProductFromCart: (state, action: PayloadAction<number>) => {
      const productCart = state.cart.find(
        (product) => product.id === action.payload
      );
      if (productCart) {
        if (productCart && productCart.quantity > 1) {
          state.cart.find(
            (product) => product.id === action.payload
          )!.quantity -= 1;
        } else {
          state.cart = state.cart.filter(
            (product) => product.id !== action.payload
          );
        }
        state.finalPrice -= productCart.product.price || 0;
      }
    },

    removeProduct: (state, action: PayloadAction<number>) => {
      const productCart = state.cart.find(
        (product) => product.id === action.payload
      );
      if (productCart) {
        state.finalPrice -=
          productCart.product.price *
          (state.cart.find((p) => p.id === productCart.id)?.quantity ?? 0);
        state.cart = state.cart.filter(
          (product) => product.id !== action.payload
        );
      }
    },

    clearCart: (state) => {
      state.cart = [];
      state.finalPrice = 0;
      state.unSeenCartItems = 0;
    },
  },
});

export const {
  setCart,
  addProductToCart,
  removeProductFromCart,
  removeProduct,
  clearCart,
  cleanCarItemsNotifications,
} = cartSlice.actions;

export default cartSlice.reducer;
