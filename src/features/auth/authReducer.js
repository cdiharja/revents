import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";
//maps:AIzaSyBDPBpA_Ps1eWGcglAHyGgRzfSfSnjmFdw
const initialState={
    authenticated:false,
    currentUser:{
        email:"bob@email.com",
        photoURL:'/assets/user.png'                    
    }
};
export default function authReducer(state=initialState,{type,payload}){
    switch(type){
        case SIGN_IN_USER:
            return {...state,
                authenticated:true,
                currentUser:{
                    email:payload.email,
                    photoURL:'/assets/user.png'                    
                }
            }
        case SIGN_OUT_USER:
            return {...state,
                authenticated:false,
                currentUser:null
            };
        default:
            return state;
    }
}