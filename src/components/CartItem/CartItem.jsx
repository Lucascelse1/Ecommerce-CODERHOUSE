const CartItem = ({ name, img }) => {
    return (
        <article>
            <h2>{name}</h2>
            <img src={img} alt="" />

        </article>
    )
}

export default CartItem

