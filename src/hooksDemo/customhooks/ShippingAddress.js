import { useState } from "react"
import useZipLookUp from "./useZipCode"

const ShippingAddress = () => {
    const [zipcode, setZipcode] = useState('')
    const [city, state] = useZipLookUp(zipcode);

    const formHandler = (e) => {
        e.preventDefault();
        setZipcode(e.target.zipcode.value)
    }

    return <>
        <form className="form-group" onSubmit={formHandler}>
            <label>Enter Zipcode</label>
            <input type="text" />
            <button type="submit" >Look for city</button>
        </form>
        <h1>Address Details</h1>
        <h2>City: {city}</h2>
        <h3>State:{state}</h3>
    </>
}

export default ShippingAddress;