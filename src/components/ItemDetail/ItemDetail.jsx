import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { useNotification } from "../../notification/hooks/useNotification"


const ItemDetail = ({ id, name, img, price, stock, category, description }) => {

    const [quantity, setQuantity] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const { showNotification } = useNotification()

    const handleOnAdd = (quantity) => {
        const obtProductToAdd = {
            id, name, price, quantity
        }
        console.log(obtProductToAdd)
        showNotification('success', `Se agrego correctamente ${quantity} ${name}`)
        console.log('agregue al carrito: ', quantity)

        setQuantity(quantity)

        addItem(obtProductToAdd)
     }

    return (
        <article className="w-full flex justify-center">
            <section className="bg-[#414e58] w-3/12 text-white flex flex-col items-center rounded-lg p-4 gap-y-4 shadow-[0_0_20px_0_black] tracking-widest">
                <h2 className="text-center">{ name } ({ category })</h2>
                <img className="w-40 h-36 rounded-sm" src={img} alt="gun-photo" />
                <h3>Precio: ${price}</h3>
                <footer>
                    {
                        quantity === 0 ? (
                            <ItemCount initialValue={1} stock={ stock } onAdd={ handleOnAdd } />
                        ) : (
                            <Link to='/cart' className="text-2xl border p-2 rounded-lg">Finalizar compra</Link>
                        )
                    }
                </footer>
            </section>
            <section className="w-4/12 p-8 text-white tracking-widest text-xl">
                <p> {description} </p>
            </section>
        </article>

    )
}

export default ItemDetail