import { useAsycn } from "../../hooks/useAsync"
import { getProductsById } from "../../services/firebase/firestore/products"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const getDoc = () => getProductsById(itemId)

    const { data: product, loading, error } = useAsycn(getDoc, [itemId])

    if(loading) {
        return <h1 className="text-center text-white text-3xl font-['Protest_Guerrilla'] tracking-widest">Cargando producto...</h1>
    }

    if(error) {
        return <h1 className="text-center text-white text-3xl font-['Protest_Guerrilla'] tracking-widest">Error al obtener el prodcuto.</h1>
    }

    return (
        <main className="w-full flex flex-col justify-center items-center gap-y-2 font-['Protest_Guerrilla']">
            <h1 className="text-white my-4 tracking-widest text-3xl">Detalle del producto</h1>
            <ItemDetail {...product} />
        </main>
    )
}


export default ItemDetailContainer