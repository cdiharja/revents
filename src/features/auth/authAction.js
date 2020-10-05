import { SIGN_IN_USER,SIGN_OUT_USER } from "./authConstants";
import firebase from '../../firebase'
import {APP_LOADED} from "../../store/asyncReducer"
export function SignInUser (user){
    // return async function (dispatch){
    //     try{
    //         const result = await firebase.auth().signInWithEmailAndPassword(creds.email,creds.password);
    //         dispatch({type:SIGN_IN_USER,payload:result.user});
    //     }catch(error){
    //         throw error;
    //     }
    // }
    return {
        type:SIGN_IN_USER,payload:user
    }
}
export function verifyAuth(){
    return function (dispatch){
        return firebase.auth().onAuthStateChanged(user=>{
            if(user){
                dispatch(SignInUser(user));
                dispatch({type:APP_LOADED});
            }else{
                dispatch(SignOutUser());
                dispatch({type:APP_LOADED});
            }
        })
    }
}

export function SignOutUser (){
    return {
        type:SIGN_OUT_USER
    }
}
