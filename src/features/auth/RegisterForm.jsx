import { Form, Formik } from 'formik';
import React from 'react';
import { Button, Divider, Label } from 'semantic-ui-react';
import ModalWrapper from '../modals/ModalWrapper';
import MyTextInput from '../MyTextInput';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { SignInUser } from './authAction';
import { closeModal } from '../modals/modalReducer';
import { registerInFirebase, signInWithEmail } from '../../firestore/firebaseService';
import SocialLogin from './SocialLogin';
export default function RegisterForm(){
    const dispatch=useDispatch();
    return (
        <ModalWrapper size="mini" header="Register">
            <Formik initialValues={{displayName:'',email:'',password:''}}
                validationSchema={Yup.object({
                    displayName: Yup.string().required(),
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={async (values,formikBag)=>{
                    try{
                        await registerInFirebase(values);
                        formikBag.setSubmitting(false);
                        dispatch(closeModal());     
                    }catch(error){
                        console.log(error);
                        formikBag.setSubmitting(false);
                        formikBag.setErrors({auth:error.message});
                    }
                    
                    console.log(values);
                }}
            > 
                {({isSubmitting,isValid,dirty,errors}) => (
                    <Form className="ui form">
                        <MyTextInput name="displayName" placeholder="Display Name"/>
                        <MyTextInput name="email" placeholder="Email Address"/>
                        <MyTextInput name="password" placeholder="Password" type="Password"/>
                        {errors.auth && <Label color="red" content={errors.auth}/>}
                        <Button loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type="submit" fluid size="large" color="green" content="register"
                        />
                        
                        <Divider horizontal>Or</Divider>
                        <SocialLogin/>
                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    )
}