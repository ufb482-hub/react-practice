import React, { useState, useRef } from "react";
import { StudentData } from "./StudentData";

const Home = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const btnref = useRef();
//  useEffect( () => {
//  alert("count was changed")
//  a.current=a.current+1;
//  console.log(`a value is ${a.current}`);
//  console.log(`count value is ${count}`);
// }, [count])
// useEffect(() => {
//   alert("i am running on just onely first rendering after this you not see me untill refresh page")
// }, [])
// useEffect(() => {
//  alert("i am  running on every rendring")
// })
  return (
    <>
      <h2>Welcome to Home Page</h2>

      <StudentData />

      <button ref={btnref} onClick={() => setCount(count + 1)}>
        The count is {count}
      </button>

      <button
        onClick={() => {
          btnref.current.style.display = "none";
        }}
        onDoubleClick={() => {
          btnref.current.style.display = "block";
        }}
      >
        Remove counter button display
      </button>

      <p>Enter your Name</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Name is : {name}</p>
    </>
  );
};

export default Home;
