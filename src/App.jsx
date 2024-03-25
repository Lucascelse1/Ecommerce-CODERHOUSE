import './App.css'
import Navbar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createContext, useState } from 'react'

export const CartContext = createContext(1)

function App() {

  const [cart, setCart] = useState([])
  console.log('CART ', cart)

  const addItem = (productToAdd) => {
    if(!isInCart(productToAdd.id)){
      setCart(prev => [...prev, productToAdd])
    } else {
      console.error('El producto ya esta agregado')
    }
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
  }

  return (
    <>
      <CartContext.Provider value={{cart, addItem}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS A LA PIRINOLA' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos de la categoria: ' />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App
