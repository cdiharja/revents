import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Header, Segment ,Button} from 'semantic-ui-react';

function EventForm({setFormOpen,setEvents,createEvent,selectedEvent,updateEvent}){
    const initialValue = selectedEvent??{
        title:"",
        category:"",
        description:"",
        city:"",
        venue:"",
        date:""
    };
    const [values,setValues] = useState(initialValue);
   
    const handleInputChange = (e)=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
    };
    const handleFormSubmit = ()=>{
        
        console.log(values);
        selectedEvent ? updateEvent({...selectedEvent,...values}) :
            createEvent({...values,id:new Date().getTime(),hostedBy:'Bob',attendees:[],hostPhotoURL:'./assets/user.png'});
            setFormOpen(false);
      
    };
    return (
        <Segment clearing>
            <Header content={selectedEvent?"Edit Event":"create new event"}/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type="text" placeholder="Title" name="title"  value={values.title} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category" name="category"  value={values.category} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" name="description"  value={values.description} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" name="city"  value={values.city} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue" name="venue"  value={values.venue} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date" name="date"  value={values.date} onChange={(e)=>handleInputChange(e)}/>
                </Form.Field>
                <Button type="submit" floated="right" positive content="Submit"></Button>
                <Button as={Link} to="/events" type="submit" floated="right" content="Cancel"></Button>
            </Form>
        </Segment>
    )
}
export default EventForm;