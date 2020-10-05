
import { Formik,Form } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { Segment,Header, Button, Label } from 'semantic-ui-react';
import * as Yup from 'yup';
import { updateUserPassword } from '../../firestore/firebaseService';
import MyTextInput from '../MyTextInput';

const AccountPage = ()=>{
    const {currentUser} = useSelector((state)=>state.auth);
    // if(!currentUser){
    //     return (
    //         <>
    //         </>
    //     )
    // }
    return (
        <Segment>
            <Header content="Account"/>
            {currentUser.providerId==="password" && 
                <div>
                <Header content="change pwd"></Header>
                <Formik
                    initialValues={{newPassword1:'',newPassword2:''}}
                    validationSchema={
                        Yup.object({
                            newPassword1:Yup.string().required(),
                            newPassword2: Yup.string().oneOf([Yup.ref('newPassword1'),null],"Pwd do not match")
                        })                       
                    }
                    onSubmit={async (values,formikBag)=>{
                        
                        try{
                            await updateUserPassword(values);                           
                           // dispatch(closeModal());     
                        }catch(error){
                            console.log(error);
                            formikBag.setErrors({auth:error.message});
                            
                        }finally{
                            formikBag.setSubmitting(false);
                        }
                       
                    }}

                    
                >
                    {({errors,isSubmitting,isValid,dirty})=>(
                        <Form className="ui form">
                            <MyTextInput name='newPassword1' type='password' placeholder='p1'/>
                            <MyTextInput name='newPassword2' type='password' placeholder='p2'/>
                            {errors.auth && <Label color="red" content={errors.auth}/>}
                            <Button loading={isSubmitting}
                                onClick={()=>console.log("B")}
                                disabled={!isValid || !dirty || isSubmitting}
                                type="submit" fluid size="large" color="green" content="update password"
                            />
                        </Form>  
                    )}
                    

                </Formik>
            </div>
            }
            {currentUser.providerId==="facebook" &&
                <div>
                    <Header content="facebook account">                    
                    </Header>
                </div>
            }
             {currentUser.providerId==="google.com" &&
                <div>
                    <Header content="google account">                    
                    </Header>
                </div>
            }
        </Segment>
    )
}
export default AccountPage;