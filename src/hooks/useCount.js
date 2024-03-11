import { useState } from "react"

export const useCount = (initialValue, stock) => {
    const [count, setCount] = useState(initialValue)

    const increment = () => {
        if (count < stock) setCount(prev => prev + 1)
    }

    const decrement = () => {
        if(count > 1) setCount(prev => prev - 1)      
    }

    return {
        count,
        decrement,
        increment
    }
}