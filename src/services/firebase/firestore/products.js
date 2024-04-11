import { getDocs, collection, query, where, doc, getDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { createProductAdaptedFromFirestore } from "../../../adapters/createProductAdaptedFromFirestore"

export const getProducts = (categoryId) => {
    const productsCollection = categoryId ? (
        query(collection(db, 'products'), where('category', '==', categoryId))
    ) : (
        collection(db, 'products')
    )


    return getDocs(productsCollection)
        .then(QuerySnapshot => {
            const productsAdapted = QuerySnapshot.docs.map(doc => {
                return createProductAdaptedFromFirestore(doc)
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
                const productAdapted = createProductAdaptedFromFirestore(QueryDocumentSnapshot)

                return productAdapted
            })
            .catch(error => {
                return error
            })
}