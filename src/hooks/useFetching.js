import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args) => {
        try {
            setIsLoading(true)
            await callback(...args)
            setError('')
        } catch (error) {
            setIsLoading(false)
            error.response ? setError(error.response.data) : setError("Unknown error");
        } finally {
            setIsLoading(false)
        }
    }

    return[fetching, isLoading, error]
}