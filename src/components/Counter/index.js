import {useState} from 'react';
import "./index.css"


function Counter(props) {

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
    console.log(counter);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
    console.log(counter);
  }
  return (
    <>
      <h1 className="heading">{counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  );
}

export default Counter;