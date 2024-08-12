import { useContext } from "react";
import { ColorContext, NameContext } from "../../../store/contextStore";
import { ComponentA } from "./ComponentA";

export default function ContextAPIDemo() {
    // return <>
    //     <NameContext.Provider value="Sportz Interactive">
    //         <ComponentA />
    //     </NameContext.Provider>
    // </>
    const name = useContext(NameContext)
    const color = useContext(ColorContext)

    return <>
        <h1 style={{ color: color }}>From Component D</h1>
        <h3>Company Name = {name}</h3>
    </>
}