import './App.css'
import Navbar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='BIENVENIDOS A LA PIRINOLA' />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos de la categoria: ' />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            {/* <Route path='/cart' element={<Cart/>}/> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
