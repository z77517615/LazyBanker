import React, { useState,useEffect} from "react";

import {db } from '../firebase/config';
import { collection, onSnapshot } from "firebase/firestore"; 

export default function getCollect(col){
    const [documents, setDocument] = useState(null);
 
        
    useEffect(()=>{  
        let ref = collection(db , col)

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
            results.push({id: doc.id, ...doc.data()})
            })
            setDocument(results)
        })
        
        return () => unsub()
    },[col])

    return {documents}
}
 