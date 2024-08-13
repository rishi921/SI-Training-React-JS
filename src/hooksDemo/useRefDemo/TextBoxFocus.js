import { useEffect, useRef } from "react";

const TextBoxFocus = () => {
    let message = 'Welcome'

    const inputRef = useRef();
    const labelRef = useRef();

    const fileInputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    })

    const buttonHandler = () => {
        labelRef.current.innerText = 'You have clicked the button'
    }

    const buttonHandler2 = () => {
        labelRef.current.innerText = inputRef.current.value;
    }

    const onFileUpload = () => {
        fileInputRef.current.click()
    }

    return <>
        <label className="form-control m-2 text-center" name='msg' ref={labelRef}>{message}</label>

        Name : <input className="form-control m-2" type="text" ref={inputRef} />

        Email : <input className="form-control m-2" type="text" />

        <button className="btn btn-success m-2 p-1" onClick={buttonHandler}>Click</button>

        <button className="btn btn-primary m-2 p-1" onClick={buttonHandler2}>Enter Name </button>

        <hr />
        <input className="form-control m-2 p-1" type="file" hidden={true} ref={fileInputRef} />
        <button className="btn btn-warning m-1 p-1" onClick={onFileUpload}>Upload File</button>
    </>
}

export default TextBoxFocus;