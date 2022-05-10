import React, { useState, useEffect } from 'react'

const Timer = ({ timeLimit, status }) => {
    const [count, setCount] = useState(0)

    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setCount(count + 1)
            if (count === timeLimit) {
                setCount(0)
            }
        }, 1000);
        return () => clearInterval(timer)
    })

    const stopTimer = () => {
        clearInterval(timer)
    }

    useEffect(() => {
        if (!status) {
            stopTimer()
        }
    })
    return (
        <div className='count'>{count}</div>

    )
}

export default Timer