import Item from "../Item/Item"

const ItemList = ( { products } ) => {
    return (
        <div className="flex gap-10 justify-center">
            {
                products.map(product => {
                    return <Item key={product.id} {...product} />
                        
                })
            }
        </div>
    )
}

export default ItemList