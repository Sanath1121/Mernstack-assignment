import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTest } from "../store/TestStore";
function C() {
  // const {x, incrementX, decrementX}=useTest()
  const x = useTest((state) => state.x);
  const incrementX = useTest((state) => state.incrementX);
  const decrementX = useTest((state) => state.decrementX);
  // console.log("at C",useTest())
  let { counter1, changeCounter1 } = useContext(CounterContext);
  console.log("Component C is rendering");
  return (
    <div className="p-7 text-center shadow-2xl p ">
      <p className="p-3 text-4xl">Component C</p>
      <p className="p-3">Counter1: {counter1}</p>
      <button
        onClick={changeCounter1}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer p-3"
      >
        Change Counter1
      </button>
      <br /> <br />
      <p className="p-3">X: {x}</p>
      <button
        onClick={incrementX}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer p-3 m-2"
      >
        IncrementX
      </button>
      <button
        onClick={decrementX}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer p-3 m-2"
      >
        DecrementX
      </button>
    </div>
  );
}

export default C;
