const products = [
    {
        id: '1',
        name: 'Glock',
        price: 25000,
        category: 'Pistola',
        img: 'https://media.istockphoto.com/id/1180387778/es/foto/imagen-aislada-de-una-pistola-glock-17-sobre-fondo-blanco.jpg?s=1024x1024&w=is&k=20&c=F65UkdvwDwkU2AMZ2hJR0Y0XKDkqQHmSftpOoYEfMdo=',
        stock: 20,
        description: 'Descripcion del arma'
    },
    {
        id: '2',
        name: 'USP',
        price: 35000,
        category: 'Pistola',
        img: 'url',
        stock: 15,
        description: 'Descripcion del arma'
    },
    {
        id: '3',
        name: 'Dessert Eagle',
        price: 40000,
        category: 'Revolver',
        img: 'url',
        stock: 40,
        description: 'Descripcion del arma'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}