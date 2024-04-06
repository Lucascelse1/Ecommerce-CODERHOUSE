import { useEffect, useState } from "react"
/* import { getProductsById } from "../../asyncMock" */
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc, } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(QueryDocumentSnapshot => {
                const data = QueryDocumentSnapshot.data()
                const productAdapted = {id: QueryDocumentSnapshot.id, ...data}

                setProduct(productAdapted)
            })
            .catch()

        /* getProductsById(itemId)
            .then(result => {
                setProduct(result)
            }) */
    }, [itemId])

    return (
        <main className="w-full flex flex-col justify-center items-center gap-y-2 font-['Protest_Guerrilla']">
            <h1 className="text-white my-4 tracking-widest text-3xl">Detalle del producto</h1>
            <ItemDetail {...product} />
        </main>
    )
}


export default ItemDetailContainer