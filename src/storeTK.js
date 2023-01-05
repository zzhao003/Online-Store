import { createSlice, configureStore } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    GET_PRODUCTS_REQUEST(state) {
      return { loading: true };
    },
    GET_PRODUCTS_SUCCESS(state, action) {
      return { products: action.payload, loading: false };
    },
    GET_PRODUCTS_FAILED(state, action) {
      return { error: action.payload, loading: false };
    },
  },
});

const productByIdSlice = createSlice({
  name: "productById",
  initialState: { product: [] },
  reducers: {
    GET_PRODUCTBYID_REQUEST(state) {
      return { loading: true };
    },
    GET_PRODUCTBYID_SUCCESS(state, action) {
      return { product: action.payload, loading: false };
    },
    GET_PRODUCTBYID_FAILED(state, action) {
      return { error: action.payload, loading: false };
    },
  },
});

const storeTK = configureStore({
  reducer: {
    products: productsSlice.reducer,
    productById: productByIdSlice.reducer,
  },
});

export const productsActions = productsSlice.actions;
export const productByIdActions = productByIdSlice.actions;

export default storeTK;
