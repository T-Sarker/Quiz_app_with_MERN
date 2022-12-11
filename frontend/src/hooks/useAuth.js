// custom hook for getting the context dirctly by reducing the repeated code
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const useAuth = () => {
    return useContext(AuthContext)
}


export default useAuth