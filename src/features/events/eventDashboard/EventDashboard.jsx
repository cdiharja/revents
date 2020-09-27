import React,{useState} from 'react';
import {Grid} from 'semantic-ui-react';
import EventList from './EventList';
// import EventForm from '../eventForm/EventForm';
import {sampleData} from '../../../api/sampleData';

const EventDashboard = (props)=>{
    const [events,setEvents] = useState(sampleData);

    // const handleCreateEvent=(event)=>{
    //     setEvents([...events,event]);
    // };

    // const handleSetEvent=(updatedEvent)=>{
    //     setEvents(events.map(e => e.id===updatedEvent.id ? updatedEvent : e));
    //     props.onEventSelect(null);
    //     //props.setFormOpen(false);

    // }
    const handleDeleteEvent = (eventId)=>{
        setEvents(events.filter(e=>e.id!==eventId));
    };
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} deleteEvent={handleDeleteEvent}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
                
            </Grid.Column>
        </Grid>
    )
};

export default EventDashboard;