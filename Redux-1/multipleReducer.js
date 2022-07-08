const { createStore, combineReducers } = require("redux");

//product reducer

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";
//cart state
const initialCartState = {
  cart: ["Sugar"],
  numberOfCart: 1,
};

//product state
const initialProductState = {
  products: ["Sugar", "Salt"],
  numberOfProducts: 2,
};

const getProducts = () => {
  return { type: GET_PRODUCTS };
};
const addProducts = (product) => {
  return { type: ADD_PRODUCTS, payload: product };
};

//cart Actions
const getCart = () => {
  return { type: GET_CART };
};
const addCart = (product) => {
  return { type: ADD_CART, payload: product };
};

//product reducer

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCTS:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

//cart reducer
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
      };
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfCart: state.numberOfCart + 1,
      };

    default:
      return state;
  }
};

///

const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCart());
store.dispatch(addCart("Pan"));
store.dispatch(getProducts());
store.dispatch(addProducts("Pan"));
