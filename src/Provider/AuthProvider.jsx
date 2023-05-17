import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoadear] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const creatUser = (email, password) => {
        setLoadear(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = ()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const logIn = (email, password) => {
        setLoadear(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOut = () => {
        setLoadear(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoadear(false);
        })

        return () => {
            return unsubscribe();
        }
    }, []);


    const allInfo = {
        creatUser,
        googleSignIn,
        logIn,
        LogOut,
        loader,
        user
    }
    return (
        <AuthContext.Provider value={allInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;