import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <img src="" alt="" />
            <nav className="bg-[#51616d] w-2/4 p-2 flex justify-around my-2 rounded-lg divide-x text-white">
                <div className='w-1/3 flex justify-center'><a className='tracking-[.3rem]' href="">ARMAS</a></div>
                <div className='w-1/3 flex justify-center'><a className='tracking-[.3rem]' href="">MUNICIONES</a></div>
                <div className='w-1/3 flex justify-center'><a className='tracking-[.3rem]' href="">BLINDAJE</a></div>    
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar




