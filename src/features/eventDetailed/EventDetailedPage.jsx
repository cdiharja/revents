import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import { listenToEventFromFirestore } from '../../firestore/firestoreService';
import useFirestoreDoc from '../../hooks/useFirestoreDoc';
import { listenToEvents } from '../events/eventAction';
import LoadingComponent from '../LoadingComponent';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSidebar from './EventDetailedSidebar';

export default function EventDetailedPage({match}){
    const dispatch = useDispatch();
    const event = useSelector(state=>{
      //  console.log(state);
        console.log(match.params.id);
        return    state.event.events.find(e=>e.id=== match.params.id);
    });
    const {loading,error} = useSelector((state)=> state.async);

    useFirestoreDoc({
        query:()=>listenToEventFromFirestore(match.params.id),
        data: event=> dispatch(listenToEvents([event])),
        deps: [match.params.id]
    })

    if(loading || (!event && !error)) return <LoadingComponent content="Loading.."/>
    if(error) return <Redirect to="/error"/>
    //console.log(event);
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