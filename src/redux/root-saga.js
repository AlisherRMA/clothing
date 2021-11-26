import { all, call } from "@redux-saga/core/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.saga";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}