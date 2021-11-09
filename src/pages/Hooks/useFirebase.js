import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLodding, setIsLodding] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Handle email password register
    const handleEmailRegister = (email, password, name, history) => {
        console.log(email, password)
        setIsLodding(true);
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser = { email, displayName: name };
                updateProfile(auth.currentUser, {
                    displayName: { name }
                }).then(() => {
                }).catch((error) => {
                });
                setUser(newUser);
                saveUser(email, name, 'POST')
                history.replace('/home');
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
                //call the function to add user to db
                saveUser(result.user.email, result.user.displayName, 'PUT');
                setUser(result.user);
                setError('');
            }).catch((error) => {
                setError(error.message);
                setUser('');
            })
            .finally(() => setIsLodding(false))
    };
    // add user to db
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };

        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
            })
    };

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
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            }
            else {
                setUser({})
            };
            setIsLodding(false)
        })
        return () => unsubscribe;
    }, [])

    // find admin 

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(result => setAdmin(result.admin))
    }, [user.email]);

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

    };
    return {
        user,
        error,
        admin,
        token,
        isLodding,
        handleEmailLogin,
        handleEmailRegister,
        handleLogOut,
        googleSignin
    }
};
export default useFirebase;