const Item = ({name, img, price}) => {
    return (
        <div className="text-white">
            <h2>{name}</h2>
            <img className="w-24" src={img} alt="" />
            <h3>Precio: ${price}</h3>
        </div>
    )
}

export default Item