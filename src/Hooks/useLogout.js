import React , { useState , useEffect } from 'react'
import { useAuthContext } from './useAuthContext'

//firebase
import {auth} from '../firebase/config'
import {signOut} from "firebase/auth"


export const  useLogout = () => {
    const [error , setError] = useState(null)
    const [isPending ,setIsPending] = useState(false)
    const [isCancelled , setIsCanelled] = useState(false)
    const {dispatch} = useAuthContext()


    const logout = async() =>{
        setError(null)
        setIsPending(true)

        try{
            await signOut(auth)

            dispatch({type: "LOGOUT"})

            if(!isCancelled){
                setIsPending(false)
                setError(null)               
            }
        }
        catch(err){
            if(!isCancelled){
                console.log(err.message)
                setIsPending(false)
                setError(err.message)
            }                 
        }
    }      
    useEffect(()=>{
        return () =>setIsCanelled(true)
    },[])

    return{error , logout , isPending}
}
 
