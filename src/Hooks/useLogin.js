import React, { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
//firebase
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCanelled] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setIsPending(false);
        if (err.message == "Firebase: Error (auth/user-not-found).") {
          setError("User not found, please Signup first");
        } else if (err.message == "Firebase: Error (auth/wrong-password).") {
          setError("Wrong password");
        } else {
          setError(err.message);
        }
      }
    }
  };
  useEffect(() => {
    return () => setIsCanelled(true);
  }, []);

  return { error, login, isPending };
};
