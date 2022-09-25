import './Counter.css';
import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(count => count + 1);
    }

    const decrease = () => {
        setCounter(count => count - 1);
    }

    const reset = () => {
        setCounter(0)
    }
    return( 
        <div>
         <div className="counter">

         <button className="btn" onClick={decrease}>-</button>
         <button className="btn-r"onClick={reset}>reset</button>
         <button className="btn" onClick={increase}>+</button>
         </div>
         <div className="zero">{counter}</div>
        </div>
    )
}

export default Counter;