
import React, { useState } from "react";

// Importing app.css is css file to add styling
import "./App.css";

const App = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0);

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1);
    };

    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1);
    };
    const handleClick3 = () => {
        // Counter state is decremented
        setCounter(0);
    };

    return (
        <div className="parent">
         <div className="counter-app">
         <div>
            Counter App
            <div className="counter">
               {counter}
            </div>
            <div className="buttons">
                <button onClick={handleClick1} className="inc">
                
                    Increment
                </button>
                <button  onClick={handleClick2} className="dec">
                
                    Decrement
                </button>
                <button   onClick={handleClick3} className="reset" >
                    reset
                </button>
            </div>
        </div>
         </div>
        </div>
    );
};

export default App;