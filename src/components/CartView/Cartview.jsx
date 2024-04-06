import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"


const CartView = () => {
    const { cart, removeItem, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className="text-center text-white text-4xl font-['Protest_Guerrilla'] tracking-widest">
                <h1 className="m-10">No hay Items en el carrito...</h1>
                <Link className="border rounded-lg p-2" to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <article className="font-['Protest_Guerrilla'] text-center text-white">
            <h1 className=" text-5xl mb-8">Carro de compras</h1>
            <section className="m-10"> 
            {
                cart.map(prod => {
                    return (
                        <article className="flex justify-around border p-4 text-2xl" key={prod.id}>
                            <h2>{prod.name}</h2>
                            <h3>Total: ${total}</h3>
                            <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                        </article>
                    )
                })
            }
            </section>
            <Link className="text-3xl border rounded-lg p-2 m-8" to='/checkout'>Checkout</Link>
        </article>
    )
}

export default CartView