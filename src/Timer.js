import React, { useState, useEffect } from "react";

export const Timer = () => {
    const [time, setTime] = useState(0);
    
    const formatOptions = {
        hour: 'numeric', minute: 'numeric', second: 'numeric', 
    };

    useEffect(() => {
        const timerId = setInterval(() =>
            setTime(
                new Intl.DateTimeFormat('en-NZ', formatOptions)
                    .format(new Date())), 1000);
        return () => clearInterval(timerId);
    }, []);

    return (
        <div>
            {time}
        </div>
    );
}