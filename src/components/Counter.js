import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    // let count = 0;
    const increment = () => {
        setCount(count + 1)
        // count = count + 1;
        console.log("count value : " + count);
    }
    return (
        <>
            <h2>Count : {count} </h2>
            <button onClick={increment}>Increment</button>
        </>
    );
}