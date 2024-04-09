import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/hooks/useNotification"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setLoading(true)

        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            collection(db, 'products')
        )


        getDocs(productsCollection)
            .then(QuerySnapshot => {
                const productsAdapted = QuerySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data }
                })

                console.log(productsAdapted)
                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', 'Error al cargar la lista de productos')
            })
            .finally(() => {
                setLoading(false)
            })



    }, [categoryId, showNotification])

    if (loading) {
        return <h1 className="text-center text-white text-3xl font-['Protest_Guerrilla'] tracking-widest">Cargando listado de productos...</h1>
    }

    return (
        <main className="w-full my-4 flex flex-col justify-center items-center font-['Protest_Guerrilla'] tracking-widest">

            <h1 className="text-center text-white text-4xl font-body p-4"> {greeting} </h1>


            <ItemList products={products} />


        </main>
    )
}

export default ItemListContainer