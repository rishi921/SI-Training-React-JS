import React from "react";

const Cart = ({ price, setPrice }) => {
    const [boolval1, setBoolVal1] = React.useState(true);
    const [boolval2, setBoolVal2] = React.useState(true);
    const [boolval3, setBoolVal3] = React.useState(true);

    const val1Fun = (e) => {
        setBoolVal1(!boolval1);
        setPrice(price - 4);
    };

    const val2Fun = (e) => {
        setBoolVal2(!boolval2);
        setPrice(price - 9);
    };

    const val3Fun = (e) => {
        setBoolVal3(!boolval3);
        setPrice(price - 3);
    };

    return (
        <div className="container m-2 p-2">
            {boolval1 ? (
                <p>
                    Random_Item1: 4{" "}
                    <button onClick={val1Fun}>Remove from Cart</button>
                </p>
            ) : (
                <div></div>
            )}
            {boolval2 ? (
                <p>
                    Random_Item2: 9{" "}
                    <button onClick={val2Fun}>Remove from Cart</button>
                </p>
            ) : (
                <div></div>
            )}
            {boolval3 ? (
                <p>
                    Random_Item3: 3{" "}
                    <button onClick={val3Fun}>Remove from Cart</button>
                </p>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default Cart;