import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLodding, setIsLodding] = useState(true);

    const auth = getAuth();

    // Handle email password register
    const handleEmailRegister = (email, password) => {
        console.log(email, password)
        setIsLodding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                setUser(userCredential.user);
            })
            .catch((error) => {
                setError(error.message);
                setUser('');
            })

            .finally(() => setIsLodding(false))
    };

    // handle email password login
    const handleEmailLogin = (email, password) => {
        setIsLodding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
                setUser('');
            })

            .finally(() => setIsLodding(false))
    }

    // user state change observation

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setIsLodding(true)
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            };
            setIsLodding(false)
        })
        return () => unsubscribe;
    }, [])

    // Handle sign out
    const handleLogOut = () => {
        setIsLodding(true);
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message);
            setUser('');
        })
            .finally(() => setIsLodding(false))

    }




    return {
        user,
        error,
        isLodding,
        handleEmailLogin,
        handleEmailRegister,
        handleLogOut
    }
};
export default useFirebase;