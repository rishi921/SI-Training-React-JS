import { useEffect, useState } from "react"

//Timer Component
const Timer = () => {
    const [timer, setTimer] = useState(20);
    useEffect(() => {
        console.log("From useEffect Beginning");
        const interval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1))
            console.log(`Timer ${timer}`);
        }, 1000);

        return () => {
            console.log("From the return statement called when unmounted")
            clearInterval(interval); //CleanUp activity: You can write any cleanup functions 
        }
    }, []);

    return <h3>Timer : {timer}</h3>
}

//Component to decide to show or hide the Timer Component
const ShowHideTimer = ({ show }) => (show ? <Timer /> : <h4>Nothing to Render</h4>) //This will either show the timer or hide the timer

//=========Container Component=========
const CleanUpWithUseEffect = () => {
    const [show, setShow] = useState(false);

    return <>
        <h1>From the Container</h1>
        <button onClick={() => setShow(!show)}>
            {show ? 'HIDE' : 'SHOW'} Timer
        </button>
        <ShowHideTimer show={show} />
    </>
}
export default CleanUpWithUseEffect