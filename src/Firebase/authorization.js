import {auth} from "./firebase";

export const registerFire = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};
export const loginFire = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
};
export const logOutFire = () => {
    return auth.signOut()
}