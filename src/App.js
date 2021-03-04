// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Machine from "./Machine";

function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment);
	return (
  	<button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
	return (
  	<div>{props.message}</div>
  );
}


function App() {
  const randArr = ["a", "b", "c"];
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <>
    <div className="App">
      <h2>Slot Machine</h2>
      <Machine
        s1={randArr[Math.floor(Math.random() * randArr.length)]}
        s2={randArr[Math.floor(Math.random() * randArr.length)]}
        s3={randArr[Math.floor(Math.random() * randArr.length)]}
      />
    </div>

    <div className="button">
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={100} />
      <Display message={counter}/>
    </div>  
    </>
  );
}

export default App;
