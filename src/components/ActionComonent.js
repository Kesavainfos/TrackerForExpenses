import React, { useEffect, useState } from "react";

export default function ActionComonent(props) {
  let type = "";
  const [value, setValue] = useState(0);
  const aa = window.localStorage.getItem("balance");
  const [balance, setbalance] = useState(550);

  useEffect(() => {
    if (window.localStorage.hasOwnProperty("balance")) {
      setbalance(parseInt(window.localStorage.getItem("balance")));
    } else {
      setbalance(500);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("balance", balance);
  }, [balance]);

  const increasebalance = () => {
    type = "Add";
    props.update(new Date().toLocaleString() + " -" + value + " - " + type);
    return setbalance(balance + parseInt(value));
  };
  const decreasebalance = () => {
    type = "Remove";
    props.update(new Date().toLocaleString() + " -" + value + " - " + type);
    return setbalance(balance - parseInt(value));
  };
  const handlerUpdate = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <p> balance {balance} </p>
      <p>
        <input value={value} type="number" onChange={handlerUpdate} />
      </p>
      <button onClick={increasebalance}>Add</button>
      <button onClick={decreasebalance}>Remove</button>
    </div>
  );
}
