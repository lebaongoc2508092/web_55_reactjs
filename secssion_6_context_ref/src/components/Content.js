import { useRef } from 'react';
const Context = () => {
    const inputRef = useRef(null);
    const timerRef = useRef(0);
    
    const handlerOnClick = () => {
        inputRef.current.focus();
    }
    const handlerStart = () => {
        timerRef.current = setInterval(() => {
            console.log('Hello')
        },1000)
    }
    const handlerStop = () => {
        clearInterval(timerRef.current);
    }
    return (
        <div className="center border flex-1">
            <input ref={inputRef} type="text"></input>
            <button onClick={handlerOnClick}>Focus</button>
            <button onClick={handlerStart}>Start</button>
            <button onClick={handlerStop}>Stop</button>
        </div>
    );
};
export default Context;