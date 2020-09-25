import React from 'react';
import EventListItem from './EventListItem';

function EventList({events}){
    return (
        <>
        {events.map(e=>{
            return (
                <EventListItem key={e.id} event={e}/>   
            )
        })
        }
        </>
    )
}
export default EventList;