//async action
// api url -

const API_URL = "https://jsonplaceholder.typicode.com/todos/";
const { default: axios } = require("axios");
// middleWare4 = redux-thunk
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

//axios api

const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAIL = "GET_TODOS_FAIL";
//state

const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

//action

const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosFail = (error) => {
  return {
    type: GET_TODOS_FAIL,
    payload: error,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

//reducer

const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

//async action Creator

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        console.log(titles);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

//store

const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
