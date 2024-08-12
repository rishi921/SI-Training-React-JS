import { useState } from "react"
import DisplayComponent from "./DisplayComponent"

const InputComponent = () => {
    const [userName, setuserName] = useState('')
    const [role, setRole] = useState('')

    return <>
        <input value={userName} onChange={(e) => setuserName(e.target.value)} />
        <input value={role} onChange={(e) => setRole(e.target.value)} />
        <DisplayComponent name={userName} role={role} />
    </>
}

export default InputComponent