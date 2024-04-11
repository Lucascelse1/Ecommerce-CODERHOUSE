import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../services/firebase/firestore/products"
import { useAsycn } from "../../hooks/useAsync"


const ItemListContainer = ({ greeting }) => {

    const { categoryId } = useParams()

    const getData = () => getProducts(categoryId)
        

    const { data: products, loading, error } = useAsycn(getData, [categoryId])

    if (loading) {
        return <h1 className="text-center text-white text-3xl font-['Protest_Guerrilla'] tracking-widest">Cargando listado de productos...</h1>
    }

    if (error) {
        return <h1 className="text-center text-white text-3xl font-['Protest_Guerrilla'] tracking-widest">Hubo un error en la carga de productos.</h1>
    }

    return (
        <main className="w-full my-4 flex flex-col justify-center items-center font-['Protest_Guerrilla'] tracking-widest">

            <h1 className="text-center text-white text-4xl font-body p-4"> {greeting} </h1>


            <ItemList products={products} />


        </main>
    )
}

export default ItemListContainer