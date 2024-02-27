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
        <div className="w-full my-4">
            <h1 className="text-center text-white text-4xl font-body"> {greeting} </h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer