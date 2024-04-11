import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const getProducts = (categoryId) => {
    const productsCollection = categoryId ? (
        query(collection(db, 'products'), where('category', '==', categoryId))
    ) : (
        collection(db, 'products')
    )


    return getDocs(productsCollection)
        .then(QuerySnapshot => {
            const productsAdapted = QuerySnapshot.docs.map(doc => {
                const data = doc.data()

                return { id: doc.id, ...data }
            })

            console.log(productsAdapted)
            return productsAdapted
        })
        .catch(error => {
            return error
        })
        
}

export const getProductsById = (itemId) => {
    const productDoc = doc(db, 'products', itemId)

        return getDoc(productDoc)
            .then(QueryDocumentSnapshot => {
                const data = QueryDocumentSnapshot.data()
                const productAdapted = {id: QueryDocumentSnapshot.id, ...data}

                return productAdapted
            })
            .catch(error => {
                return error
            })
}