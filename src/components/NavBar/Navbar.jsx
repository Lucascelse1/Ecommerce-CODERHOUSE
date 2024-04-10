import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'
import guns from './assets/guns.svg'
import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Navbar = () => {

    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order'))

        getDocs(categoriesCollection)
            .then(QuerySnapshot => {
                const categoriesAdapted = QuerySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            .catch (error => {
                console.error(error)
            })
    }, [])

    return (
        <header className={classes.header}>
            <h1 className='flex flex-col justify-center items-center text-white text-lg' onClick={() => navigate('/')}>La Pirinola<img className='w-14 flex' src={guns} alt=""/></h1>
            <nav className="bg-[#51616d] w-9/12 md:w-2/4 p-2 flex justify-around my-2 rounded-lg text-white">

                {
                    categories.map(cat => {
                        return <Link className='w-1/3 uppercase text-lg flex justify-center tracking-[.3rem]' key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</Link>
                    })
                }

                {/* <Link to='/category/Pistola' className='w-1/3 flex justify-center tracking-[.3rem]'>PISTOLAS</Link>
                <Link to='/category/Fusiles' className='w-1/3 flex justify-center tracking-[.3rem]'>RIFLES</Link>
                <Link to='/category/Cuchillos' className='w-1/3 flex justify-center tracking-[.3rem]'>CUCHILLOS</Link> */}    
            </nav>
            <CartWidget />
        </header>
    )
}

export default Navbar




