import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, increaseByFive } from "./counterSlice";

const CounterView = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(increaseByFive());
        }}
      >
        Increase By Five
      </button>
    </div>
  );
};

export default CounterView;
