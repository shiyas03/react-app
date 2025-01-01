import { useEffect, useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log('fire on mounted and also update');
    })

    useEffect(()=>{
        console.log('fire on update');
    },[counter])

    useEffect(()=>{
        return ()=>{
            console.log('fires on unmounted and also update');
        }
    })

    useEffect(()=>{
        return ()=>{
            console.log('fires on unmounted');
        }
    },[])

    return (
        <div>
            <div>Couter Component</div>
            <div>Couter: {counter} </div>
            <button onClick={() => setCounter(counter + 1)}>increase</button>
        </div>
    )
}