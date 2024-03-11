import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({name, img, price, stock, category}) => {
    return (
        <div className="bg-[#414e58] w-3/12 text-white flex flex-col items-center rounded-lg p-4 gap-y-4 shadow-[0_0_20px_0_black] tracking-widest">
            <h2 className="text-center">{name} ({category})</h2>
            <img className="w-40 h-36 rounded-sm" src={img} alt="gun-photo" />
            <h3>Precio: ${price}</h3>
            <ItemCount initialValue={1} stock= { stock }/>
        </div>
    )
}

export default ItemDetail