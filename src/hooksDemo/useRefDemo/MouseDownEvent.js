import { useEffect, useRef, useState } from "react"

const RefWithMouseEvent = () => {
    const [on, setOn] = useState(true)

    const refElem = useRef();

    useEffect(() => {
        const listener = e => {
            if (!refElem.current) return null;
            if (!refElem.current.contains(e.target)) {
                setOn(false)
            }
        }
        console.log("On Status : ", on)
        window.addEventListener('mousedown', listener);
        return () => window.removeEventListener('mousedown', listener)
    }, [on])

    if (!on) {
        return null;
    }
    return <ul ref={refElem}>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Contact Us</li>
    </ul>
}

export default RefWithMouseEvent