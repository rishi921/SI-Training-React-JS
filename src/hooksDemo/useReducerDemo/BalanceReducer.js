import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer } from "react";

const balanceReducer = (state, action) => {
    switch (action.type) {
        case 'DEPOSIT': return state + Number(action.payload);
        case 'WITHDRAW': return state - Number(action.payload);
        default: return state;
    }
}

const BalanceReducer = () => {
    const initialBalance = 5000;
    const [amount, setAmount] = useState(0)
    const [balance, dispatch] = useReducer(balanceReducer, initialBalance);

    return <>
        <h1 className="bg-primary text-center m-2 p-2">Balance: ₹{balance}</h1>

        <input className='form-control' value={amount} onChange={e => setAmount(e.target.value)}></input>

        <button className="btn btn-success m-2 p-1" onClick={() => dispatch({ type: 'DEPOSIT', payload: amount })}> Deposit </button>

        <button className="btn btn-danger m-2 p-1" onClick={() => dispatch({ type: 'WITHDRAW', payload: amount })}> Withdraw </button>

        <button className="btn btn-warning m-2 p-1" onClick={() => dispatch({})}> Check Balance </button>
    </>
}

export default BalanceReducer;