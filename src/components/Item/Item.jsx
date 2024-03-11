import { Link } from "react-router-dom"

const Item = ({id, name, img, price, category}) => {
    return (
        <article className="bg-[#414e58] text-white flex flex-col items-center rounded-lg p-4 gap-y-4 shadow-[0_0_20px_0_black]">
            <h2 className="text-center">{name}</h2>
            <img className="w-40 h-36 rounded-sm" src={img} alt="gun-photo" />
            <h3>Precio: ${price}</h3>
            <h4>Categoria: {category}</h4>
            <Link to={`/item/${id}`} className="border p-2 rounded-lg tracking-widest">Ver Detalle</Link>
        </article>
    )
}

export default Item