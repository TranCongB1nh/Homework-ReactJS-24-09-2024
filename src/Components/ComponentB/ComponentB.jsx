import React from "react";

export default function ComponentB (props) {
    const {handleClick} = props

    return (
        <div>
            <button onClick={() => handleClick()}>Click me, i'm B</button>
        </div>
    )
}