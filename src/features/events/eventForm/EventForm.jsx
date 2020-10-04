import { Formik,Form } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Header, Segment ,Button, Confirm } from 'semantic-ui-react';
import {listenToEvents} from '../eventAction';
import * as Yup from 'yup';
import MyTextInput from '../../MyTextInput';
import MyTextArea from '../../MyTextArea';
import MySelectInput from '../../MySelectInput';
import { categoryData } from '../../../api/categoryOptions';
import MyDateInput from '../../MyDateInput';
import useFirestoreDoc from '../../../hooks/useFirestoreDoc';
import { listenToEventFromFirestore,addEventInFirestore,updateEventInFirestore, cancelEventToggle } from '../../../firestore/firestoreService';
import LoadingComponent from '../../LoadingComponent';
import { useState } from 'react';

function EventForm({match,history}){
    const dispatch = useDispatch();
   
    const {loading,error} = useSelector((state)=> state.async);
    const selectedEvent = useSelector(state=>state.event.events.find(e=>e.id=== match.params.id));
    const [loadingCancel,setLoadingCancel] = useState(false);
    const [confirmOpen,setConfirmOpen] = useState(false);

    const initialValue = selectedEvent??{
        title:"",
        category:"",
        description:"",
        city:"",
        venue:"",
        date:""
    };
   // const [values,setValues] = useState(initialValue);
  
    const validationSchema = Yup.object({
        title:Yup.string().required("Please provide a title"),
        category:Yup.string().required("Please provide a category"),
        description:Yup.string().required("Please provide a description"),
        city:Yup.string().required("Please provide a city"),
        venue:Yup.string().required("Please provide a venue"),
        date:Yup.string().required("Please provide a date"),
    });
    async function handleCancelToggle(event){
        setConfirmOpen(false);
        setLoadingCancel(true);
        try{
            await cancelEventToggle(event);
            setLoadingCancel(false);
        }catch(error){
            setLoadingCancel(true);
            
        }
    }
    
    useFirestoreDoc({
        shouldExecute:!!match.params.id,
        query:()=>listenToEventFromFirestore(match.params.id),
        data: event=> dispatch(listenToEvents([event])),
        deps: [match.params.id]
    })
    
    if(loading ) return <LoadingComponent content="Loading.."/>
    if(error) return <Redirect to="/error"/>
    return (
        <Segment clearing>
            <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={async (values,{setSubmitting}) =>{
                    try
                    {   
                        selectedEvent ?                         
                        await updateEventInFirestore(values)
                        : await addEventInFirestore(values);
                        //</Segment>dispatch(createEvent({...values,id:new Date().getTime().toString(),hostedBy:'Bob',attendees:[],hostPhotoURL:'./assets/user.png'}));   
                        setSubmitting(false);
                        history.push('/events');
                    }catch(error){
                       // toast
                       setSubmitting(false);
                    }
                   
                   
                }}
            >               
                {({isSubmitting,dirty, isValid}) => (

                    <Form className="ui form" >
                    <Header sub color="teal" content="Event Details"/>       
                    <MyTextInput name="title" placeholder="Event Title" label="Title"/>
                    <MySelectInput name="category" placeholder="Category" label="Category" options={categoryData}/>
                    <MyTextArea name="description" placeholder="Description" label="Description" rows="3"/>
                    <Header sub color="teal" content="Event Location"/>    
                    <MyTextInput name="city" placeholder="City" label="City"/>
                    <MyTextInput name="venue" placeholder="Venue" label="Venue"/>
                    <MyDateInput name="date" placeholderText="date" label="Date"
                        timeFormat="HH:mm"
                        showTimeSelect timeCaption="time"
                        dateFormat="MMMM d, yyyy h:mm a"
                    />
                    {selectedEvent &&
                    <Button onClick={()=>setConfirmOpen(true)} loading={loadingCancel}
                    type="button" floated="left" content={selectedEvent.isCancelled?"reactivate":"cancel event"} color={selectedEvent.isCancelled?"green":"red"}></Button>
                    }
                    <Button loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} type="submit" floated="right" positive content="Submit"></Button>
                    <Button disabled={isSubmitting} as={Link} to="/events" type="submit" floated="right" content="Cancel"></Button>
                    </Form> 
                )}
                   
            </Formik>
            <Confirm content={selectedEvent?.isCancelled ? "are you seure to reactivate event?" : "are you sure to cancel event?"}
                open={confirmOpen}
                onCancel={()=>setConfirmOpen(false)}
                onConfirm={()=>handleCancelToggle(selectedEvent)}
                
            >

            </Confirm>
        </Segment>
    )
}
export default EventForm;