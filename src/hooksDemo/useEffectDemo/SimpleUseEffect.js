import { useState, useEffect } from "react"

const SimpleUseEffect = () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    useEffect(() => {
        console.log("From Use Effect Value 1 " + value1);

        console.log("From Use Effect Value 2 " + value2);
    }, [value1, value2])  //This square bracket is dependency array

    useEffect(() => {
        console.log("2nd Use Effect Value 1 " + value1);

        console.log("2nd Value 2 " + value2);
    }, [value1, value2])

    return <>
        <div>
            <h3>Value 1 = {value1}</h3>
            <label>Enter Value 1: </label>
            <input value={value1} onChange={e => setValue1(e.target.value)} />
        </div>

        <div>
            <h3>Value 2 = {value2}</h3>
            <label>Enter Value 2: </label>
            <input value={value2} onChange={e => setValue2(e.target.value)} />
        </div>
    </>
}
export default SimpleUseEffect;