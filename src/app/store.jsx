import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice";
import categoryReducer from "../features/category/categorySlice";
import singleProductReducer from "../features/singleProduct/singleProductSlice";

const store = configureStore({
  reducer: {
    productsR: productsReducer,
    categoryR: categoryReducer,
    singleProductR: singleProductReducer,
  },
});

export default store;
