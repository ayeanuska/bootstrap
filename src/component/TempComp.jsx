import React, { useState } from "react";

const TempComp = () => {
  console.log(useState(0));
  const [count, setCount] = useState(0);
  let temp = 0;

  // let count = 0;

  const updateCounter = () => {
    setCount(count + 1);

    console.log(count);
  };

  const decreaseCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {" "}
      <div>
        counter:
        <div> {count}</div>
        <button onClick={updateCounter}> Click Me! </button>
        <button onClick={decreaseCounter}> Undo! </button>
      </div>
    </div>
  );
};

export default TempComp;
