import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector([selectShop], (shop) => shop.collections);

export const selectCollectionForPreivew = createSelector([selectShopItems], (collections) =>
  collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopItems], (collections) => (collections ? collections[collectionUrlParam] : null))
);

export const selectIsCollectionFetching = createSelector([selectShop], (shop) => shop.isFetching);

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!shop.collections);
