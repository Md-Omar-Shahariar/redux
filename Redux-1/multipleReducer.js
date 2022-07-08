const { createStore } = require("redux");

//product reducer

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCTS = "ADD_PRODUCTS";

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

///

const store = createStore(productReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("Pan"));
