import React, { useState } from "react";
import ComponentB from "../ComponentB/ComponentB";

export default function ComponentA () {
    const [number, setNumber] = useState(0)

    function handleClick () {
        setNumber (number + 1)
    }

    return (
        <div>
            <h1>Counter: {number}</h1>
            <button onClick={handleClick}>Click me, i'm A</button>
            <ComponentB handleClick={handleClick}/>
        </div>
    )
}