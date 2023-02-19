import React, { useState } from "react";
import "../styles.css";

export default function Calculator(){

    const [firstInput, setFirstInput] = useState(0);
    const [secondInput, setSecondInput] = useState(0);

    function calculation(e){
        setFirstInput(Number(e.target.value));
    }

    function calculationTwo(e){
        setSecondInput(Number(e.target.value));
    }

    let result = firstInput + secondInput;
    return(

        <div>
            <input onChange={calculation}></input>
            <input onChange={calculationTwo}></input>

            {/* <h1>{firstInput + secondInput}</h1> */}
            <h1>{result}</h1>

        </div>
    )
}