import cart from './assets/cart.svg'

const CartWidget = () => {
    return (    
        <a className='w-12 absolute right-8 top-2 flex'> 
            <img src={ cart } alt="cart-widget" />
            <span className='text-center w-full text-4xl text-white'>0</span>
        </a>
    )
}

export default CartWidget