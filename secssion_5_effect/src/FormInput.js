import { useState, useEffect } from 'react';

let timer = 0;
const FormInput = () => {
    const [value, setValue] = useState ('');
    const [isValid, setIsValid] = useState ('');
    const [ debouncedValue, setDebouncedValue] = useState ('');
    useEffect(() => {
        // Valid
        const valid = value.includes('@');
        setIsValid(valid);
    },[value]);

    useEffect(() => {
        
        timer = setTimeout(() =>{
            setDebouncedValue(value)
        }, 1000);
        return () => {
            clearTimeout(timer);
        }
    }, [value])

    return (
        <div>
            <label> Email </label>
            <input 
            style={{
                border: isValid ? '1px solid blue' : '1px solid red'
                ,color: isValid ? 'blue' : 'red'}}
            type="text"
            value={value} 
            onChange={(evt) => {
                setValue (evt.target.value);
            }}>
            </input>
           { isValid ? null : <div style = {{ color: 'red'}}> This is not valid email address </div>}
           <div>{debouncedValue}</div>
        </div>
    )
};

export default FormInput;
