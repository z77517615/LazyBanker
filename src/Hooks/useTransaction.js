import React, { useReducer, useState, useEffect, useRef } from "react";

import { db } from "../firebase/config";
import {
  doc,
  collection,
  addDoc,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

//defined initialState
let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const TransactionReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { document: null, isPending: true, error: null, success: null };
    case "ADDED_TRANSACTION":
      return {
        success: true,
        isPending: false,
        error: null,
        document: action.payload,
      };
    case "UPDATE_TRANSACTION":
      return {
        success: true,
        isPending: false,
        error: null,
        document: action.payload,
      };
    case "DELETE_TRANSACTION":
      return {
        success: true,
        isPending: false,
        error: null,
        document: action.payload,
      };
    case "ERROR":
      return {
        isPending: false,
        success: false,
        document: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const editTransaction = (col) => {
  const [response, dispatch] = useReducer(TransactionReducer, initialState);
  const [isCancelled, setIscancelled] = useState(false);

  //get ref
  const ref = collection(db, col);

  //only if dispatch is not cancelled
  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };
  //add a transaction
  const addTransaction = async (doc) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const createdAt = serverTimestamp();
      const addTransaction = await addDoc(ref, { ...doc, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_TRANSACTION",
        payload: addTransaction,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };
  //delete a transaction
  const deleteTransaction = async (id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const docRf = doc(db, col, id);
      const deleteTransaction = await deleteDoc(docRf);
      dispatchIfNotCancelled({
        type: "DELETE_TRANSACTION",
        payload: deleteTransaction,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  const updateTransaction = async (transaction, id) => {
    dispatch({ type: "IS_PENDING" });
    try {
      console.log(id);
      const docRf = doc(db, col, id);
      const updateTransaction = await updateDoc(docRf, { ...transaction });
      dispatchIfNotCancelled({
        type: "UPDATE_TRANSACTION",
        payload: updateTransaction,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  useEffect(() => {
    return () => setIscancelled(true);
  }, []);

  return { addTransaction, deleteTransaction, updateTransaction, response };
};
