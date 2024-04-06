import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Checkout = () => {

    const { cart, total } = useContext(CartContext)

    const createOrder = (userData) => {
        const objOrder = {
            buyer: userData,
            items: cart,
            total
        }

        

    }


    return (
        <div>
            <h1>Checkout</h1>
            <h2>nombre, mail, telefono</h2>
            <button onClick={createOrder}>Generar orden de compra (generando la orden de compra en firebase)</button>
        </div>
    )
}

export default Checkout