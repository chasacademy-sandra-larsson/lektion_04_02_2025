import {useState} from "react";


function Counter() {

    // State updater function
    const [count, setCount] = useState<number>(0)

    const handleIncrease = () => {
        setCount((prevCount) => prevCount + 1);
        
    }

    const handleDecrease = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return (
        /* count är vårt nuvarande state*/
        <div style={{border: "1px solid black"}}>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>

    )
}

export default Counter;