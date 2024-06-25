import {app} from "./firebaseConfig";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);

const loginComEmailESenha = async (email, senha) => {
    try {
        await signInWithEmailAndPassword(auth, email, senha);
    } catch (error){

    }
}

const registrarComEmailESenha = async (name, email, pwd) => {
    try {
        await createUserWithEmailAndPassword(auth, email, senha, pwd)
    } catch (error) {

    }
}

export {
    auth,
    loginComEmailESenha,
    registrarComEmailESenha,
}