import React from "react";
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTest } from "../store/TestStore";
function B() {
  // const {y, incrementY, decrementY}=useTest()
  const y = useTest((state) => state.y);
  const incrementY = useTest((state) => state.incrementY);
  const decrementY = useTest((state) => state.decrementY);
  const incrementYByValueV = useTest((state) => state.incrementYByValueV);
  // console.log("at B",useTest())
  let { counter1, changeCounter1, counter2, changeCounter2 } =
    useContext(CounterContext);
  console.log("Component B is rendering");
  return (
    <div className="p-7 text-center shadow-2xl p ">
      <p className="p-3 text-4xl">Component B</p>
      <p className="p-3">Counter1: {counter1}</p>
      <p className="p-3">Counter2: {counter2}</p>
      <button
        onClick={changeCounter1}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer p-3"
      >
        Change Counter1
      </button>
      <br /> <br />
      <button
        onClick={changeCounter2}
        className="bg-green-500 text-white px-4 py-2  rounded hover:bg-green-600 cursor-pointer p-3"
      >
        Change Counter2
      </button>
      <br /> <br />
      <p className="p-3">Y: {y}</p>
      <button
        onClick={incrementY}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer p-3 m-2"
      >
        IncrementY
      </button>
      <button
        onClick={decrementY}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer p-3"
      >
        DecrementY
      </button>
      <button
        onClick={() => incrementYByValueV(5)}
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 cursor-pointer p-3 m-2"
      >
        IncrementY by Value
      </button>
    </div>
  );
}

export default B;
