import { useCount } from "../../hooks/useCount"


const ItemCount = ({initialValue, stock, onAdd}) => {

    const { count, decrement, increment } = useCount(initialValue, stock)

    return (
        <div className="w-max font-bold text-xl">
            <h1 className="text-center text-xl">{count}</h1>           
            <button onClick={decrement} className="border m-2 w-12 p-[0.4rem] rounded-lg hover:bg-white hover:text-black">-</button>
            <button className="tracking-widest text-lg" onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}  className="border m-2 w-12 p-[0.4rem] rounded-lg hover:bg-white hover:text-black">+</button>
        </div>
    )
}

export default ItemCount