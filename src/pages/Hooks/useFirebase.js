import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLodding, setIsLodding] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Handle email password register
    const handleEmailRegister = (email, password, name, history) => {
        console.log(email, password)
        setIsLodding(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                history.replace('/home');
                const newUser = { email, displayName: name };
                updateProfile(auth.currentUser, {
                    displayName: { name }
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                setUser(newUser);
            })
            .catch((error) => {
                setError(error.message);
                setUser('');
            })

            .finally(() => setIsLodding(false))
    };

    //handle google sign in

    const googleSignin = (history, location) => {
        setIsLodding(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
                setUser(result.user);
                setError('');
            }).catch((error) => {
                setError(error.message);
                setUser('');
            })
            .finally(() => setIsLodding(false))
    }

    // handle email password login
    const handleEmailLogin = (email, password, history, location) => {
        setIsLodding(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
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
        handleLogOut,
        googleSignin
    }
};
export default useFirebase;