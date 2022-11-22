import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import IceCreamView from "./features/iceCream/iceCreamView";
import CakeView from "./features/cake/cakeView";
import UserView from "./features/user/useView";
import CoffeeView from "./features/coffee/coffeeView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Coffee Shop Application</h1>
      <CakeView />
      <IceCreamView />
      <CoffeeView />
      <UserView />
    </div>
  );
}

export default App;
