import { createSelector } from "reselect";
import { getCartItemsQuantity, getCartItemsTotalPrice } from "./cart.utils";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) => getCartItemsQuantity(cartItems));

export const selectCartTotal = createSelector([selectCartItems], (cartItems) => getCartItemsTotalPrice(cartItems));
