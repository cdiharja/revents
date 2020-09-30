import { Form, Formik } from 'formik';
import React from 'react';
import { Button } from 'semantic-ui-react';
import ModalWrapper from '../modals/ModalWrapper';
import MyTextInput from '../MyTextInput';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { SignInUser } from './authAction';
import { closeModal } from '../modals/modalReducer';
export default function LoginForm(){
    const dispatch=useDispatch();
    return (
        <ModalWrapper size="mini" header="Sign in">
            <Formik initialValues={{email:'',password:''}}
                validationSchema={Yup.object({
                    email: Yup.string().required().email(),
                    password: Yup.string().required()
                })}
                onSubmit={(values,formikBag)=>{
                    dispatch(SignInUser(values));
                    formikBag.setSubmitting(false);
                    dispatch(closeModal());
                    console.log(values);
                }}
            >
                {({isSubmitting,isValid,dirty}) => (
                    <Form className="ui form">
                        <MyTextInput name="email" placeholder="Email Address"/>
                        <MyTextInput name="password" placeholder="Password" type="Password"/>
                        <Button loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type="submit" fluid size="large" color="green" content="login"
                        />

                    </Form>
                )}
            </Formik>
        </ModalWrapper>
    )
}