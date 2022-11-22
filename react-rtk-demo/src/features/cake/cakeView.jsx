import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const cakeView = () => {
  const numberOfCake = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Cake:{numberOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>restore cake</button>
    </div>
  );
};

export default cakeView;
