export const createProductAdaptedFromFirestore = (doc) => {

    const data = doc.data()

    return {
        id: doc.id,
        name: data.name,
        img: data.img,
        category: data.category,
        price: data.price,
        stock: data.stock,
        description: data.description
    }
}