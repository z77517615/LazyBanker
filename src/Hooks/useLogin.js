import React, { useState, useEffect } from "react";
import { useAuthContext } from "./useAuthContext";
//firebase
import { auth, provider } from "../firebase/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCanelled] = useState(false);
  const { dispatch } = useAuthContext();

  const signInWithGoogle = () => {
    setError(null);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        if (!isCancelled) {
          setError(null);
        }
      })
      .catch((error) => {
        if (!isCancelled) {
          if (error.message == "Firebase: Error (auth/unauthorized-domain).") {
            setError(
              "Login from unauthorized domain. Please try login with email and password"
            )}
            if (error.message == "Firebase: Error (auth/popup-closed-by-user).") {
              setError(
                "Closed by user, please try again"
              );
          } else {
            setError(error.message);
          }
        }
      });
  };

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

  return { error, login, isPending, signInWithGoogle };
};