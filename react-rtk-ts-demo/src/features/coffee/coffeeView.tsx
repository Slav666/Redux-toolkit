import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./coffeeSlice";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CoffeeView = () => {
  const numberOfCoffees = useAppSelector(
    (state) => state.coffee.numberOfCoffees
  );
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Coffee: {numberOfCoffees}</h2>
      <button onClick={() => dispatch(ordered())}>order coffee</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch(restocked(value))}>restore coffee</button>
    </div>
  );
};

export default CoffeeView;
