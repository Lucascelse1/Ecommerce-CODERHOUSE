const products = [
    {
        id: '1',
        name: 'Glock G22',
        price: 25000,
        category: 'Pistola',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/5220_1.jpg.webp',
        stock: 15,
        description: 'La GLOCK 22 es una pistola de servicio de tamaño completo semiautomática, que dispara el cartucho de pistola calibre .40 S&W, una ronda de defensa estándar con un poder de derribo probado.'
    },
    {
        id: '2',
        name: 'Bersa TPR380',
        price: 35000,
        category: 'Pistola',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/5369_1.jpg.webp',
        stock: 18,
        description: 'La Bersa TPR380 es una pistola semiautomática de acción doble/simple calibre .380. Su diseño surge de los cambios y modificaciones realizadas a la serie de pistolas Bersa Thunder 380 Pro, con resultados sobresalientes.'
    },
    {
        id: '3',
        name: 'Tanfoglio T97F',
        price: 40000,
        category: 'Pistola',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/5625_1.jpg.webp',
        stock: 10,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Fusiles',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '5',
        name: 'Porongol',
        price: 60000,
        category: 'Fusiles',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '6',
        name: 'Porongol',
        price: 60000,
        category: 'Fusiles',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '7',
        name: 'Porongol',
        price: 60000,
        category: 'Cuchillos',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '8',
        name: 'Porongol',
        price: 60000,
        category: 'Cuchillos',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '9',
        name: 'Porongol',
        price: 60000,
        category: 'Cuchillos',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}