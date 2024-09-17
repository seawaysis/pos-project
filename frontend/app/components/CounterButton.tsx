'use client';

import { useContext } from'react'
import { DataContext } from '../share/page'

export default function CounterButton(){
    const [counter,setCounter] = useContext(DataContext)

    const handleClick = () => {
        setCounter(counter +1)
    }

    return <button onClick={handleClick}>Increment Count</button>
}