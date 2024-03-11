const products = [
    {
        id: '1',
        name: 'Glock G22',
        price: 255000,
        category: 'Pistola',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/5220_1.jpg.webp',
        stock: 15,
        description: 'La GLOCK 22 es una pistola de servicio de tamaño completo semiautomática, que dispara el cartucho de pistola calibre .40 S&W, una ronda de defensa estándar con un poder de derribo probado.'
    },
    {
        id: '2',
        name: 'Bersa TPR380',
        price: 350000,
        category: 'Pistola',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/5369_1.jpg.webp',
        stock: 18,
        description: 'La Bersa TPR380 es una pistola semiautomática de acción doble/simple calibre .380. Su diseño surge de los cambios y modificaciones realizadas a la serie de pistolas Bersa Thunder 380 Pro, con resultados sobresalientes.'
    },
    {
        id: '3',
        name: 'Tanfoglio T97F',
        price: 650000,
        category: 'Pistola',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/5625_1.jpg.webp',
        stock: 10,
        description: 'Calibre .45 ACP. Semiautomática. Doble y simple acción. Cañon de 4 pulgadas. Capacidad del cargador de 10 tiros. Terminación pavonado. Peso de 1150 grs.'
    },
    {
        id: '4',
        name: 'Browning X-Bolt',
        price: 650000,
        category: 'Fusiles',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/13010_1.jpg.webp',
        stock: 25,
        description: 'El fusil X-BOLT SF presenta una culata fabricada con materiales composite de alta resistencia y revestido con Dura-Touch® para una mejor utilización La composición de la culata le garantiza una rigidez mayor para elevar la precisión, a la vez que mantiene el peso bajo para ganar en agilidad. Calibre: .308 Longitud del cañón: 530mm Capacidad del cargador: 4 + 1 Peso total: 2.7 kg Acabado cañón: Pavonado Báscula: Acero'
        
    },
    {
        id: '5',
        name: 'Ruger Precision 308 Win',
        price: 750000,
        category: 'Fusiles',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/666_1.jpg.webp',
        stock: 12,
        description: 'El Ruger Precision (RPR) es un fusil de acción a cerrojo con un diseño de rifle moderno de asalto, también conocido como AR/MRS (ArmaLite Rifle / Modular Sniper Rifle). Se presenta en calibre 308 Winchester y cuenta con una culata Ruger Precision MRS plegable con longitud ajustable. Su cañón de 20 pulgadas está forjado en frío con martillo, cuenta con estriado 5R y posee un freno de boca que reduce el retroceso y el ruido.'
    },
    {
        id: '6',
        name: 'Sig Sauer Cross',
        price: 60000,
        category: 'Fusiles',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/11652_1.jpg.webp',
        stock: 20,
        description: 'El Sig Sauer Cross, calibre 308, es un fusil apto para la caza sumamente confiable y con un excelente nivel de precisión. Se trata de un rifle ligero y modular, capaz de adaptarse a cualquier usuario, preferencia y situación. El Sig Sauer Cross fue diseñado bajo los aportes de francotiradores militares, cazadores y tiradores de elite de largo alcance, con el fin de conseguir un producto que responda no solo al tiro de precisión a largas distancias, sino también a una cacería extrema en el campo. Cuenta con material ajustable y plegable mediante el uso de un botón, lo cual lo transforma en un fusil muy fácil de portar y trasladar. Además, es de por sí extremadamente ligero, ya que con el cargador puesto no pesa más de 2.94 kg, lo cual es 40% menos que los rifles de chasis tradicionales. Incluye también la posibilidad de intercambiar barriles y el que incluye es de acero inoxidable. Su capacidad es de 5 rondas con un cargador de polímero AICS y su gatillo es ajustable en 2 etapas. Finalmente, cabe recalcar que es de uso ambidiestro, con guardamanos flotante M-LOK y receptor de aluminio de 1 pieza.'
    },
    {
        id: '7',
        name: 'Bison de Acero Inox 3035',
        price: 20000,
        category: 'Cuchillos',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/10532_1.jpg.webp',
        stock: 20,
        description: 'Marca: Bison. Modelo: 3035. Tipo de filo de la hoja: liso. Forma de la hoja: Spear. Material del mango: plástico. Estilo: manopla. Usos recomendados: supervivencia. Material de la hoja: acero inoxidable. Largo total: 29.8 cm. Largo de la hoja: 18 cm.'
    },
    {
        id: '8',
        name: 'Táctico Bison',
        price: 30000,
        category: 'Cuchillos',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/14990_1.jpg.webp',
        stock: 20,
        description: 'Marca: Bison Modelo: E232-4 Largo Total: 24,6cm Largo de la Hoja: 11cm Material del Mango: Madera «Pakkawood» (laminas de madera teñidas y prensadas, material indeformable) Material de la Hoja: Acero Inoxidable 420'
    },
    {
        id: '9',
        name: 'Trento Hunter 640',
        price: 10000,
        category: 'Cuchillos',
        img: 'https://www.armeriacanigo.com.ar/wp-content/uploads/13945_1.jpg.webp',
        stock: 20,
        description: 'La increíble serie Hunter de la conocida marca Trento nos sigue deleitando con estos increíbles modelos. Calidad, presentación y confiabilidad en un solo producto. Presentación en caja de cartón imantada. Incluye Vaina de cordura. Largo de hoja: 10,5 Cm.         Largo total: 22,5 Cm.                -Acero 420 C plus.        Espesor: 4mm.        Mango: Madera'
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
        }, 500)
    })
}

export const getProductsById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 500)
    })
}