import React from "react";

const Counter = ({
  count,
  countTwo,
  onDecrement,
  onIncrement,
  onInputValue,
  onUpdate
}) => {
  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <span>
          <h3>
            Number Of Times Increment/Decrement Button is Clicked: {countTwo}
          </h3>
        </span>
        <input type="number" id="input" onChange={event => onInputValue(event.target.value)}></input>
        <button onClick={
          onUpdate
        }>Change Count Number</button>
      </div>
    </div>
  );
};

export default Counter;
