//state--count:
//action -- increment, decrement, reset
// reducer

const { createStore } = require("redux");

// store
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const initialState = {
  count: 0,
};

const incrementAction = () => {
  return { type: INCREMENT };
};
const decrementAction = () => {
  return { type: DECREMENT };
};
const resetAction = () => {
  return { type: RESET };
};

//Creating reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      state;
  }
};

//store

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
