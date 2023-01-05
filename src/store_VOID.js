import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};
const getAllProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return { loading: true };
    case "GET_PRODUCTS_SUCCESS":
      return { products: action.payload, loading: false };
    case "GET_PRODUCTS_FAILED":
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};

// const finalReducer = combineReducers({
//   getAllProductsReducer: getAllProductsReducer,
// });

// const composeEnhancers = composeWithDevTools({});

const store = createStore(
  getAllProductsReducer
  // composeEnhancers(applyMiddleware(thunk))
);

export default store;
