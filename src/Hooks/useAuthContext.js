import { AuthContext } from "../context/AuthContext";
import React ,{ useContext } from 'react'

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContextmust be inside an AuthContextProvider')
    }
    return context
}