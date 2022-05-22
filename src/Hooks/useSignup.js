import React , {useState ,useEffect } from "react";
import { useAuthContext } from "./useAuthContext"; 

//firebase
import {auth , storage} from '../firebase/config'
import { ref ,uploadBytes ,getDownloadURL } from "firebase/storage";
import {createUserWithEmailAndPassword , updateProfile} from "firebase/auth"


export const useSignup = () => {
    const [error,setError] = useState(null)
    const [isPending,setIsPending] = useState(false)
    const [isCancelled , setIsCanelled] = useState(false)
    const {dispatch} = useAuthContext()

    const signup = async (email,password,displayName,thumbnail) =>{
        //beginning    
        setError(null)
        setIsPending(true)

        try{
            //signup user
            const res = await createUserWithEmailAndPassword(auth,email, password)

            if(!res){
                throw new Error("Could not complete signup")
            }

            //upload user thumbnail
            const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
            const imgRef = ref(storage, uploadPath)
            const img = await uploadBytes(imgRef , thumbnail)
            const imgUrl= await getDownloadURL(imgRef)

            //add display name to user add displayName to new created user
            await updateProfile(res.user,{displayName, photoURL:imgUrl})

            //dispatch login action
            dispatch({type:'LOGIN' , payload:res.user})
            
            if(!isCancelled){
                setIsPending(false)
                setError(null)
            }
        }
        catch(err){
            if(!isCancelled){
                console.log(err.message)
                setIsPending(false)
                if(err.message == "Firebase: Error (auth/invalid-email)."){
                    setError("Invalid email, please input valid email ex.555555@gmail.com")
                }else if(err.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                    setError("Password should be at least 6 characters")
                }else{
                    setError(err.message)
                }
            }
        }
    }

    useEffect(()=>{
        return () => setIsCanelled(true)
    },[])
    
    return { error , isPending , signup};
}
 