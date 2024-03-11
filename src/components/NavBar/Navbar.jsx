import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import guns from './assets/guns.svg'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <Link className='flex flex-col justify-center items-center text-white text-lg' to='/'>La Pirinola<img className='w-14 flex' src={guns} alt=""/></Link>
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




