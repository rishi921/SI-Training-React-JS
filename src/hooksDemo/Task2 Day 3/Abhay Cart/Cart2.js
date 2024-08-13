import React, { useState, useEffect } from "react";
import Cart from "./Cart";

const Cart2 = () => {
    const [price, setPrice] = useState(0);
    const [isPaid, setIsPaid] = useState(false);

    useEffect(() => {
        let sum = 4 + 9 + 3;
        setPrice(sum);
    }, []);

    const handlePayment = () => {
        setIsPaid(true);
        setPrice(0);
        alert("Payment successful! Items removed from cart.");
    };

    return (
        <>
            <div className="container d-flex flex-row">
                <Cart price={price} setPrice={setPrice} />
                <div className="container m-2 p-2 text-center">
                    <p>Chennai, 600012 2A, New Street</p>
                    <p>Total price Rs. {price}</p>
                    <button onClick={handlePayment}>Pay now</button>
                    {isPaid && (
                        <div>
                            <h3>Payment successful!</h3>
                        </div>
                    )}
                </div>
            </div>
            <div className="container text-center m-2 p-2">
                <h1>Address</h1>
            </div>
            <p className="text-xxl-end">Chennai, 600012 </p>
            <p className="text-xxl-end">2A, New Street</p>
        </>
    );
};

export default Cart2;