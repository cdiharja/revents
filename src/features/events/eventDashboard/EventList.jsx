import React from 'react';
import EventListItem from './EventListItem';

function EventList({events,onEventSelect,deleteEvent}){
    return (
        <>
        {events.map(e=>{
            return (
                <EventListItem key={e.id} event={e} onEventSelect={onEventSelect} deleteEvent={deleteEvent}/>   
            )
        })
        }
        </>
    )
}
export default EventList;