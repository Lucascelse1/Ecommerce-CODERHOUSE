import { useState } from "react"

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initialValue)

    const increment = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <div className="w-full flex items-center justify-center font-['Protest_Guerrilla'] font-bold text-xl">           
            <button onClick={decrement} className="border m-2 w-12 p-[0.4rem] rounded-lg hover:bg-white hover:text-black">-</button>
            <h1 className="text-center text-xl">{count}</h1>
            <button onClick={increment}  className="border m-2 w-12 p-[0.4rem] rounded-lg hover:bg-white hover:text-black">+</button>
        </div>
    )
}

export default ItemCount