import React, { useState, useEffect } from "react";
import Apipull from "./ApiPull";

function Counter(){
    const [count, setCount] = useState(1);

    useEffect(() => {
        document.getElementById("counter").innerHTML = `You Clicked ${count} times`;
    });

    function handleClick(){
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={handleClick}> + </button>
            <div id = "counter">

            </div>
            <div className="returnedapi">
                <Apipull count={count}/>
            </div>
            
        </div>
        
    )    ;
}

export default Counter;