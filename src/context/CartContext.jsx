import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    console.log('CART ', cart)

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.error('El producto ya esta agregado')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.quantity
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()
    return (
        <CartContext.Provider value={{ cart, addItem, totalQuantity }}>
            { children }
        </CartContext.Provider>
    )
}