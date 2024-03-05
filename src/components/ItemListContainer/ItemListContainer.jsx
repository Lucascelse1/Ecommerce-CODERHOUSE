import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <article className="w-full my-4 flex flex-col justify-center items-center font-['Protest_Guerrilla'] tracking-widest">

            <h1 className="text-center text-white text-4xl font-body p-4"> {greeting} </h1>

            <div className="w-10/12 flex justify-center flex-wrap p-4">
                <ItemList products={products} />
            </div>
            
        </article>
    )
}

export default ItemListContainer