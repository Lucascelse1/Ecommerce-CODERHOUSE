import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, documentId, where, query, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const Checkout = () => {

    const { cart, total } = useContext(CartContext)

    /* const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[telephone, setTelephone] = useState('') */

    const createOrder = async (userData) => {

        try {
            const objOrder = {
                buyer: {
                    name: 'Elfo',
                    email: 'elfo@elfo.elfo',
                    phone: '123123123'
                },
                items: cart,
                total
            }

            const batch = writeBatch(db)
            const outOffStock = []
            const ids = cart.map(prod => prod.id)

            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))

            /* getDocs(productsCollection)
                .then(QuerySnapshot => console.log(QuerySnapshot.docs)) */

            const QuerySnapshot = await getDocs(productsCollection)

            const { docs } = QuerySnapshot

            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOffStock.push({ id: doc.id, ...data })
                }
            })

            if (outOffStock.length === 0) {
                batch.commit() //ejecuta todas las acciones que hay dentro de la caja

                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)

                console.log(id)
            } else {
                console.error('Hay productos que no tienen stock disponible')
            }
        }
        catch (error) {
            console.error('Hubo un error en la generacion de la orden')
        }

    }


    return (
        <div className="text-white font-['Protest_Guerrilla'] tracking-widest flex flex-col items-center">
            <h1 className="text-6xl my-12">Checkout</h1>
            <form className="flex flex-col w-64 border p-4 gap-y-4" action="">
                <label htmlFor="">Nombre y Apellido</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="mail" />
                <label htmlFor="">Telefono</label>
                <input type="number" />
            </form>
            <button className="tracking-widest my-8 border p-2 rounded-lg" onClick={createOrder}>Generar orden de compra <br />(generando la orden de compra en firebase)</button>
        </div>
    )
}

export default Checkout