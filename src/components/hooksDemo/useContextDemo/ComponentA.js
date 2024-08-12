import { useContext } from "react"
import { ColorContext, NameContext } from "../../../store/contextStore"

export default function ComponentA() {
    const companyName = 'Sportz Interactive'
    return <>
        <h1>From Component A</h1>
        <ComponentB />
    </>
}

function ComponentB() {
    return <>
        <h2>From Component B</h2>
        <ComponentC />
    </>
}

function ComponentC() {
    return <>
        <h3>From Component C</h3>
        <ComponentD />
    </>
}

function ComponentD() {
    // return <>
    {/* <h4>From Component D</h4> */ }
    {/* <NameContext.Consumer > */ }
    {/* {(name) => <div>Company Name: {name}</div>} */ }

    {/* </NameContext.Consumer> */ }

    const name = useContext(NameContext)
    const color = useContext(ColorContext)
    return <>
        <h1 style={{ color: color }}>From Component D</h1>
        <h3>Company Name = {name}</h3>
    </>
}