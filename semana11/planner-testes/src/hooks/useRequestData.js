import { useState, useEffect } from 'react';
import axios from 'axios'

function useRequestData(url, headers, initialState) {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        axios.get(url, headers).then(response => {
            setData(response.data)
        }).catch(error => {
            console.log(error)
        })
    }, [url])
    return data
}

export default useRequestData

