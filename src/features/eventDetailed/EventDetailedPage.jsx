import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EventDetailedPage({match}){
   
    const event = useSelector(state=>{
        console.log(state);
        console.log(match.params.id);
        return    state.event.events.find(e=>e.id=== match.params.id);
    });
    //console.log(event);
    console.log(event);
    return (
        <Grid>
            <Grid.Column width={10}>
               <EventDetailedHeader event={event}/>
               <EventDetailedInfo event={event}/>
               <EventDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>
               <EventDetailedSidebar attendees={event.attendees}/>
            </Grid.Column>
        </Grid>
    )
}