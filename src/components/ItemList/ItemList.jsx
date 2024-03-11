import Item from "../Item/Item"

const ItemList = ( { products } ) => {
    return (
        <section className="flex gap-10 justify-center items-center w-full 2xl:w-9/12 flex-wrap p-4">
            {
                products.map(product => {
                    return <Item key={product.id} {...product} />
                })
            }
        </section>
    )
}

export default ItemList