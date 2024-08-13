import { useEffect, useState } from "react";

const Kanducart = () => {

    useEffect(() => {
        let sum = val1 + val2 + val3;
        setPrice(sum);
    }, [])
    
    const [price, setPrice] = useState(0);
    const val1 = 4
    const val2 = 9
    const val3 = 3

    const [boolval1, setBoolVal1] = useState(true);
    const [boolval2, setBoolVal2] = useState(true);
    const [boolval3, setBoolVal3] = useState(true);

    const val1Fun = (e) => {
        setPrice(prevPrice => prevPrice - val1); 
        setBoolVal1(!boolval1);
    }
    const val2Fun = (e) => {
        setPrice(prevPrice => prevPrice - val2); 
        setBoolVal2(!boolval2);
    }
    const val3Fun = (e) => {
        setPrice(prevPrice => prevPrice - val3); 
        setBoolVal3(!boolval3);
    }

    return <>
        <div className="container d-flex flex-row">
            <div className="container m-2 p-2">
                {
                    boolval1 ? 
                    <p>Desk: {val1} <button className="btn btn-warning" onClick={(val1Fun)}>Remove from Cart</button> </p>
                    : <div></div>
                }
                {
                    boolval2 ?
                    <p>Lamp: {val2} <button className="btn btn-warning" onClick={(val2Fun)}>Remove from Cart</button> </p>
                    : <div></div>
                }
                {
                    boolval3 ?
                    <p>Chair: {val3} <button className="btn btn-warning" onClick={(val3Fun)}>Remove from Cart</button> </p>
                    : <div></div>
                }
            </div>
            <div className="container m-2 p-2 text-center">
                <p>Chennai, 600012</p>
                <p>2A, New Street</p>
                <p>Total price ₹ {price}</p>
                <button className="btn btn-success">Pay now</button>
            </div>
        </div>
        <div className="container text-center m-2 p-2">
            <h1>User Settings</h1>
            <h2>Addresses</h2>
        </div>
        
    </>
}

export default Kanducart;