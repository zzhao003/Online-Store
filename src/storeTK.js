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

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const CartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: cartItems },
  reducers: {
    ADD_TO_CART(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item._id == action.payload._id
      );

      if (existingItem) {
        return {
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return { cartItems: [...state.cartItems, action.payload] };
      }
    },
    ADD_TO_LOCALSTORAGE(state) {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    DELETE_FROM_CART(state, action) {
      return {
        cartItems: state.cartItems.filter(
          (item) => item._id !== action.payload
        ),
      };
    },
  },
});

const storeTK = configureStore({
  reducer: {
    products: productsSlice.reducer,
    productById: productByIdSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export const productsActions = productsSlice.actions;
export const productByIdActions = productByIdSlice.actions;
export const cartActions = CartSlice.actions;

export default storeTK;
