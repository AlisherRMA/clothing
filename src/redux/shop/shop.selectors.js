import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector([selectShop], (shop) => shop.collections);

export const selectCollection = memoize((collectionUrlParam) => createSelector([selectShopItems], (collections) => collections[collectionUrlParam]));
