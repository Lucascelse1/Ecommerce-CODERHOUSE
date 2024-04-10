import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, where, query, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { Link } from "react-router-dom"
import FormCheckout from "../FormCheckout/FormCheckout"



const Checkout = () => {
    const { cart, total, clearCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total
            };

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where('id', 'in', ids))
            const querySnapshot = await getDocs(productsCollection)
            querySnapshot.forEach(doc => {
                const data = doc.data()
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity
                if (data.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: data.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()
                const orderCollection = collection(db, 'orders')
                const addedOrderRef = await addDoc(orderCollection, objOrder)
                
                setOrderId(addedOrderRef.id)// Actualizamos el estado con el ID de la orden
                console.log(addedOrderRef.id)

                clearCart()

            } else {
                console.error('Hay productos que no tienen stock disponible')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h2 className="text-white text-3xl text-center mt-10 font-['Protest_Guerrilla'] tracking-widest">Se está generando su orden...</h2>
    }

    if (orderId) {
        return (
            <div className="w-full flex flex-col items-center">
                <h2 className="text-white text-3xl text-center mt-10 font-['Protest_Guerrilla'] tracking-widest">El ID de su orden es: {orderId} <br /> Muchas gracias por su compra! </h2>
                <Link className="text-white mt-14 text-xl uppercase font-['Protest_Guerrilla'] tracking-widest rounded-lg border p-2" to='/'>volver al inicio</Link>
            </div>
            
        )
    }

    return (
        <div className="text-white font-['Protest_Guerrilla'] tracking-widest flex flex-col items-center">
            <h1 className="text-6xl my-12">Checkout</h1>
            <FormCheckout onConfirm={createOrder} />
        </div>
    )
}

export default Checkout