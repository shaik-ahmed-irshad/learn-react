import "./App.css";
import {useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
   
    function add() {
      setCount(count+1)
    }
    function sub() {
      setCount(count-1)
    }
    function zero() {
      setCount(0)
    }
    return (
        <div className='App'>
           <button onClick={add}> i++ </button><br></br>
           <button onClick={sub}> i-- </button><br></br>
           <button onClick={zero}> i=0 </button><br></br>
           <br></br>
           {count}
        </div>
    );


}



export default App;