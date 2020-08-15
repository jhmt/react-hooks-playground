import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('use effect');
    }, [count])

    return (
        <>
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </>
    )
}

export default App;
