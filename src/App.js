import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

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
