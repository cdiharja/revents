import React from 'react';
import {Grid} from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';
//import LoadingComponent from '../../LoadingComponent';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';

const EventDashboard = (props)=>{
    const {events} = useSelector(state=>state.event);
    const {loading} = useSelector(state=>state.async);
    //const [events,setEvents] = useState(sampleData);

    // const handleCreateEvent=(event)=>{
    //     setEvents([...events,event]);
    // };

    // const handleSetEvent=(updatedEvent)=>{
    //     setEvents(events.map(e => e.id===updatedEvent.id ? updatedEvent : e));
    //     props.onEventSelect(null);
    //     //props.setFormOpen(false);

    // }
   // console.log("Loading : "+loading);
    //console.log(events);
    //if(loading) return <LoadingComponent/>
    const handleDeleteEvent = (eventId)=>{
        //setEvents(events.filter(e=>e.id!==eventId));
    };
    return (
        <Grid>
            <Grid.Column width={10}>
                {loading && 
                <>
                    <EventListItemPlaceholder/>
                    <EventListItemPlaceholder/>
                </>
                }
                <EventList events={events} deleteEvent={handleDeleteEvent}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event Filters</h2>
                <EventFilters/>
            </Grid.Column>
        </Grid>
    )
};

export default EventDashboard;