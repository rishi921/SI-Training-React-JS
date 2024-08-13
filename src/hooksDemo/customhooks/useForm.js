// A custom hook to check the data entered in a textbox and return the data or the error

import { useReducer } from "react"

const inputDataReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_VALUE': return { ...state, value: action.value }
        case 'ADD_ERROR': return { ...state, errors: [...state.errors, action.error] }
        case 'CLEAR_ERROR': return { ...state, errors: [] }
        default: return state;
    }
}

const initialData = { value: "", errors: [] }

const useFormData = () => {
    const [state, dispatch] = useReducer(inputDataReducer, initialData);

    //When the data entered by the user in the text box 
    const addValue = (event) => {
        const newValue = event.target.value;
        dispatch({ type: 'ADD_VALUE', value: newValue })
    }

    //To call the validation function and add the error message if any 
    const validateInput = (fn) => {
        //Capture the error returned by the validatiin function 
        const errFound = fn(state.value)

        if (errFound != null) {
            dispatch({ type: 'ADD_ERROR', error: errFound });
        }
    }

    //To clear or Reset the error Array
    const clearError = () => {
        dispatch({ type: 'CLEAR_ERROR' })
    }
    return { state, addValue, validateInput, clearError }
}

export default useFormData;