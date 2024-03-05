import AddToCart from "../AddToCart/AddToCart"
import ItemCount from "../ItemCount/ItemCount"

const Item = ({name, img, price}) => {
    return (
        <div className="bg-[#414e58] text-white flex flex-col items-center rounded-lg p-4 gap-y-4 shadow-[0_0_20px_0_black]">
            <h2 className="text-center">{name}</h2>
            <img className="w-40 h-36 rounded-sm" src={img} alt="gun-photo" />
            <h3>Precio: ${price}</h3>
            <ItemCount initialValue={0}/>
            <AddToCart />
        </div>
    )
}

export default Item