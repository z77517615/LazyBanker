import React, {useState,useEffect,useRef} from "react";

import { db } from '../firebase/config';
import { doc, collection ,serverTimestamp,onSnapshot, query , where , orderBy} from "firebase/firestore";

export const useCollection = (col , _userquery, _orderBy ) => {
const[error , setError] = useState(null)
const[documents , setDocuments] = useState(null)

    //chang array to ref,prevent useEffct fire loop
    const refuserquery = useRef(_userquery).current
    // const reffilterquery = useRef(_filterquery).current
    const reforderBy = useRef(_orderBy).current
    useEffect(()=>{  
        let ref = collection(db , col)

        if(refuserquery){
            console.log(refuserquery)
            ref = query(ref , where(...refuserquery))
            console.log(1,ref)
        }
        // if(reffilterquery){
        //     console.log(222222)
        //     ref = query(ref , where(...reffilterquery))
        //     console.log(2,ref)
        // }
        
        if(reforderBy){
            ref = query(ref ,orderBy(...reforderBy))
            console.log(ref)
        }


       
        //snapshot passing two argument ,first one is ref function second one is error function
        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
            })
            setDocuments(results)
            setError(null)
        },(error) =>{
            console.log(error)
            setError('Could not fetch data from firestore')
        })

        return () => unsub()
    },[col,query])
   
return {documents ,error}
}
 
