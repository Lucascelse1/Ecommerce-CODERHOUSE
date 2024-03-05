const products = [
    {
        id: '1',
        name: 'Glock',
        price: 25000,
        category: 'Pistola',
        img: 'https://armeriavitacura.cl/wp-content/uploads/2022/04/X_glock17gen39870.jpg',
        stock: 20,
        description: 'Descripcion del arma'
    },
    {
        id: '2',
        name: 'USP',
        price: 35000,
        category: 'Pistola',
        img: 'https://gunfire.com/data/gfx/pictures/medium/5/3/1152207635_1.webp',
        stock: 15,
        description: 'Descripcion del arma'
    },
    {
        id: '3',
        name: 'Dessert Eagle',
        price: 40000,
        category: 'Revolver',
        img: 'https://www.triestina.com.ar/wp-content/uploads/2018/02/2-mrde357srmb_1.jpg',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Revolver',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Revolver',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Revolver',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Revolver',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Revolver',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Revolver',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    },
    {
        id: '4',
        name: 'Porongol',
        price: 60000,
        category: 'Revolver',
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