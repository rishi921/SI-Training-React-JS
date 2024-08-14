import { useEffect } from "react"

let renderCount = 0

const ChildComponent = () => {
    useEffect(() => {
        ++renderCount
        console.log('Render Count: ' + renderCount)
    })

    return <>
        <h1>From child component, Count Value: {renderCount}</h1>
    </>
}

export default ChildComponent;