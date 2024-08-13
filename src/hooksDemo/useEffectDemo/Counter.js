import { useEffect, useState } from "react"

const Counter = () => {
    let [counter, setCounter] = useState(0);
    useEffect(() => {
        setCounter(counter + 1);
        console.log(`Counter ${counter}`);

        return () =>{
            setCounter(counter + 1);
            console.log(`In return counter ${counter}`)
        }
    }, [])

    return <>
        <h1>Counter $ {counter ++}</h1></>
}

export default Counter;