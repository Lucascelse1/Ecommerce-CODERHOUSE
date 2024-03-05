import Item from "../Item/Item"

const ItemList = ( { products } ) => {
    return (
        <div className="flex gap-10 justify-center items-center w-11/12 flex-wrap">
            {
                products.map(product => {
                    return <Item key={product.id} {...product} />
                })
            }
        </div>
    )
}

export default ItemList