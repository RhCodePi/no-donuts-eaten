import "./Donuts.css";
import { useState } from "react";

function Donuts() {
  const [counter, setCounter] = useState(0);
  const incementCounter = () => setCounter(counter + 1);

  return (
    <div className="page">
      <h1 className="header">Donut Counter</h1>
      <div className="body">
        <p className="body-text">Count no. of Donuts : {counter}</p>
      </div>
      <button className="button" onClick={incementCounter}>eat donut</button>
    </div>
  );
}

export default Donuts;
