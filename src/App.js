<<<<<<< Updated upstream
import React, { useState, useEffect } from 'react';
import './App.css';
=======
import React, { useState } from "react";
import { Timer } from './Timer';
>>>>>>> Stashed changes

const App = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('use effect');
    }, [count])

    return (
        <>
<<<<<<< Updated upstream
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}>
                Click Me
            </button>
=======
            <Timer></Timer>
            <button onClick={() => setCount1(count1 + 1)}>countup App count</button>
            <button onClick={() => setCount2(count2 + 1)}>countup Child count</button>
            <p>
                App: {count1}
            </p>
            <Child
                cnt={count2} />
>>>>>>> Stashed changes
        </>
    )
}

export default App;
