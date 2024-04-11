import { useState, useEffect } from "react"


export const useAsycn = (getData, dependencies = []) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() => {

        setLoading(true)

        getData()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })


    }, dependencies)

    return {
        data,
        loading,
        error
    }
}