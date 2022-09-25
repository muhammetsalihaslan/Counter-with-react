import './Counter.css';
import {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return( 
        <div>
         <div className="counter">

         <button className="btn">-</button>
         <button className="btn-r">reset</button>
         <button className="btn">+</button>
         </div>
         <div className="zero">{counter}</div>
        </div>
    )
}

export default Counter;