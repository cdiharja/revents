
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { socialLogin } from '../../firestore/firebaseService';
import { closeModal } from '../modals/modalReducer';
export default function SocialLogin(){
    const dispatch = useDispatch();

    function handleSocialLogin(provider){
        dispatch(closeModal());
        socialLogin(provider);
    }

    return (
       <>
        <Button icon='facebook' fluid color='facebook' style={{marginBottom:10}} content="Login" onClick={()=> handleSocialLogin('facebook')} />
        <Button icon='google' fluid color='google plus' content="Login"  onClick={()=> handleSocialLogin('google')}  />
       </>
    )
}