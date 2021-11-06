import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase.config";

const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
};
export default initializeAuthentication;