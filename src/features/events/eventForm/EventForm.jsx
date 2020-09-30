import { Formik,Form,Field,ErrorMessage } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Header, Segment ,Button, } from 'semantic-ui-react';
import {createEvent,updateEvent} from '../eventAction';
import * as Yup from 'yup';
import MyTextInput from '../../MyTextInput';
import MyTextArea from '../../MyTextArea';
import MySelectInput from '../../MySelectInput';
import { categoryData } from '../../../api/categoryOptions';
import MyDateInput from '../../MyDateInput';

function EventForm({match,history}){
    const dispatch = useDispatch();
   
    const selectedEvent = useSelector(state=>state.event.events.find(e=>e.id=== match.params.id));
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
    return (
        <Segment clearing>
            <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={values =>{
                    selectedEvent ? dispatch(updateEvent({...selectedEvent,...values})) :
                    dispatch(createEvent({...values,id:new Date().getTime().toString(),hostedBy:'Bob',attendees:[],hostPhotoURL:'./assets/user.png'}));
                    history.push('/events');
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

                    <Button loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} type="submit" floated="right" positive content="Submit"></Button>
                    <Button disabled={isSubmitting} as={Link} to="/events" type="submit" floated="right" content="Cancel"></Button>
                    </Form> 
                )}
                   
            </Formik>
            
        </Segment>
    )
}
export default EventForm;