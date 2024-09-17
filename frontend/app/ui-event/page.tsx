'use client';

import { useState } from "react";

export default function Page(){
    const [x,setx] = useState(0)

    const handleClick = () => {
        setx(x+1);
    }

    return(
        <div>
            <h1>x = {x}</h1>
            <button type="button" onClick={() => handleClick()}>click</button>
        </div>
    )
}