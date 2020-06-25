import {useEffect} from "react";
import { useHistory } from 'react-router-dom';

const useToken = () => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    useEffect(() => {
       if (token === null) {
           history.push("/login");
       }
    }, [history, token]);

    return token
}

export default useToken;