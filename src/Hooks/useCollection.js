import React, { useState, useEffect, useRef } from "react";

import { db } from "../firebase/config";
import {
  doc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

export const useCollection = (col, _userquery, _orderBy, limitnumber) => {
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState(null);
  //chang array to ref,prevent useEffct fire loop
  const query1 = useRef(_userquery).current;
  // const filter = useRef(_filter).current

  const reforderBy = useRef(_orderBy).current;

  useEffect(() => {
    let ref = collection(db, col);
    if (query1) {
      ref = query(ref, where(...query1));
    }
    if (reforderBy) {
      ref = query(ref, orderBy(...reforderBy));
    }

    if (limitnumber) {
      ref = query(ref, limit(limitnumber));
    }

    //snapshot passing two argument ,first one is ref function second one is error function
    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        setError("Could not fetch data from firestore");
      }
    );

    return () => unsub();
  }, [col, query, limitnumber]);

  return { documents, error };
};
