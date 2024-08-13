import useFormData from "./useForm"

const FormElement = () => {
    const { state, addValue, validateInput, clearError } = useFormData();

    const validate = () => {
        clearError();
        validateInput((text) => text.length < 5 ? null : 'Name should have minimum of 5 characters')
        validateInput((text) => text.toLowerCase() === 'test' ? 'Name cannot be test' : null)
    }

    return <>
        <h1>Registration Form</h1>

        <input className="form-control" type='text' onChange={addValue} />

        <button className="btn btn-primary m-2 p-2" onClick={validate}>Submit</button>

        <h3>{state?.value}</h3>

        <ul>
            {state.errors.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
    </>

}

export default FormElement;