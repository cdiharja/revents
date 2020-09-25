import React,{useState} from 'react';
import {Grid} from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import {sampleData} from '../../../api/sampleData';

const EventDashboard = (props)=>{
    const [events,setEvents] = useState(sampleData);
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {props.formOpen===true? <EventForm setFormOpen={props.setFormOpen}/> : ''}
                
            </Grid.Column>
        </Grid>
    )
};

export default EventDashboard;