import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <div>Couter Component</div>
            <div>Couter: {counter} </div>
            <button onClick={() => setCounter(counter + 1)}>increase</button>
        </div>
    )
}