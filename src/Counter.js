import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const containerStyle = {
  display: 'flex',
};
const buttonStyle = {
  fontSize: '1.5rem',
  width: '40px',
  height: '40px',
};

function Counter() {
  const dispatch = useDispatch();
  const counterNum = useSelector((state) => state.number.number);
  const nameInComponent = useSelector((state) => state.name.name);
  // const myName = useSelector((state) => state.name.name);
  const multinumber = useSelector((state) => state.multinumber.multinumber);
  // console.log(counterNum.number);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{counterNum}</h1>
        <div style={containerStyle}>
          <button
            onClick={() => dispatch({ type: 'MINUS_ONE' })}
            type="button"
            style={buttonStyle}
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: 'ADD_ONE' })}
            type="button"
            style={buttonStyle}
          >
            +
          </button>
        </div>
        <div>
          <h1>{multinumber}</h1>
          <button
            onClick={() => dispatch({ type: 'MULTIPLE' })}
            type="button"
            style={buttonStyle}
          >
            x
          </button>
        </div>
        <div>
          <h1>{nameInComponent}</h1>
          <input
            onChange={(event) =>
              dispatch({ type: 'CHANGE_NAME', terezka: event.target.value })
            }
            type="text"
            style={buttonStyle}
          />
        </div>
      </header>
    </div>
  );
}

export default Counter;
