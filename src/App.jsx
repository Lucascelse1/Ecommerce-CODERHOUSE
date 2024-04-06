import './App.css'
import Navbar from "./components/NavBar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationService'
import CartView from './components/CartView/Cartview'
import Checkout from './components/Checkout/Checkout'



function App() {

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={ <ItemListContainer greeting= 'BIENVENIDOS A LA PIRINOLA' /> } />
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos de la categoria: ' />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<CartView/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App
