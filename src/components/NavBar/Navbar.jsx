import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <Link to='/'><img className='w-12 flex' src="https://static.vecteezy.com/system/resources/previews/001/194/298/original/cross-gun-png.png" alt=""/></Link>
            <nav className="bg-[#51616d] w-9/12 md:w-2/4 p-2 flex justify-around my-2 rounded-lg text-white">
                <Link to='/category/Pistola' className='w-1/3 flex justify-center tracking-[.3rem]'>PISTOLAS</Link>
                <Link to='/category/Fusiles' className='w-1/3 flex justify-center tracking-[.3rem]'>RIFLES</Link>
                <Link to='/category/Cuchillos' className='w-1/3 flex justify-center tracking-[.3rem]'>CUCHILLOS</Link>    
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar




