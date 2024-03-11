import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [categoryId])


    return (
        <main className="w-full my-4 flex flex-col justify-center items-center font-['Protest_Guerrilla'] tracking-widest">

            <h1 className="text-center text-white text-4xl font-body p-4"> {greeting} </h1>

            
            <ItemList products={products} />
            
            
        </main>
    )
}

export default ItemListContainer