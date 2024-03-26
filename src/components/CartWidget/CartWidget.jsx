import { Link } from 'react-router-dom'
import cart from './assets/cart.svg'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (    
        <Link to='/cart' className='w-12 flex cursor-pointer mr-2'> 
            <img src={ cart } alt="cart-widget" />
            <span className='text-center w-full text-4xl text-white'>{ totalQuantity }</span>
        </Link>
    )
}

export default CartWidget