import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const iceCreamView = () => {
  const numberOfIceCream = useAppSelector(
    (state) => state.iceCream.numberOfIceCreams
  );
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Ice Cream:{numberOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>order ice cream</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      ></input>
      <button onClick={() => dispatch(restocked(value))}>
        restore ice ream
      </button>
    </div>
  );
};

export default iceCreamView;
