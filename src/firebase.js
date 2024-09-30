import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";



const firebaseConfig = {
    apiKey: "AIzaSyAQgbnEFIz7CvmNoPYSrbDMBGhsW6BJe3c",
    authDomain: "netflix-clone-db8a9.firebaseapp.com",
    projectId: "netflix-clone-db8a9",
    storageBucket: "netflix-clone-db8a9.appspot.com",
    messagingSenderId: "519546826190",
    appId: "1:519546826190:web:cd3f0cbf5c61556e354f9f"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const dataBase = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const auth = getAuth(app);
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(dataBase, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log("auth Error", error);
        toast.error(error.code);

    }
}

const login = async (email, password) => {
    try {
      const log = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log( error);
        toast.error("Invailid User");
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, dataBase, login, logout, signup };

