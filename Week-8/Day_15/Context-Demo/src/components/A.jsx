import React from "react";
import { useContext, useRef, useEffect } from "react";
import { CounterContext } from "../context/CounterContext";
import { UserContext } from "../context/UserContext";
function A() {
  let inputRef = useRef(null);
  let { counter1, changeCounter1, counter2, changeCounter2 } =
    useContext(CounterContext);
  let { user, changeUser } = useContext(UserContext);
  console.log("Component A is rendering");
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="p-7 text-center shadow-2xl p ">
      <p className="p-3 text-4xl">Component A</p>
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
      <br />
      <br />
      <hr />
      <div>
        <p className="p-3">
          User Name: <br /> {user.name}
        </p>
        <p className="p-3">
          User Email: <br /> {user.email}
        </p>
        <form
          onSubmit={(e) =>
            e.preventDefault() ||
            changeUser({
              name: document.getElementById("name").value,
              email: document.getElementById("email").value,
            })
          }
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter name"
            id="name"
          />
          <br />
          <br />
          <input type="text" placeholder="Enter email" id="email" />
          <br /> <br />
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 cursor-pointer p-3"
            type="submit"
          >
            SetUser
          </button>
        </form>
      </div>
    </div>
  );
}

export default A;
