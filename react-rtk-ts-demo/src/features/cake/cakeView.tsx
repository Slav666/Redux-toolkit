import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
  const numberOfCake = useAppSelector((state) => state.cake.numberOfCakes);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>
        Number of Cake: <span title="cake">{numberOfCake}</span>
      </h2>
      <button onClick={() => dispatch(ordered())}>order cake</button>
      <input
        title="input"
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>restore cake</button>
    </div>
  );
};

export default CakeView;
