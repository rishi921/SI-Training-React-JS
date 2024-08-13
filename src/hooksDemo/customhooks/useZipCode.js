import { useEffect, useState } from "react"

const useZipLookUp = (zipcode) => {
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const API_URL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/`;
    
    const API_KEY = 'DEMOAPIKEY';

    useEffect(() => {
        const getAddressData = async () => {
            const response = await fetch(`${API_URL}${zipcode}?key=${API_KEY}`)
            const data = await response.json()
            setCity(data.City)
            setState(data.State)
        }
        getAddressData();
    }, [zipcode])

    return [city, state];

}

export default useZipLookUp;