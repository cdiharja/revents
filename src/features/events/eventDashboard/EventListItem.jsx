import React from 'react';
import { Link } from 'react-router-dom';
import { Item, Segment,List,Button,Icon } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

function EventListItem({event,onEventSelect,deleteEvent}){
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header content={event.title}></Item.Header>
                            <Item.Description>{event.description}</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name="clock"/>{event.date}
                    <Icon name="marker"/>{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee=>( 
                        <EventListAttendee attendee={attendee} key={attendee.id}/>)
                    )}
                   
                </List>
            </Segment>
            <Segment clearing>
                <span>{event.description}</span>
                <Button color="teal" floated="right" as={Link} to={`/events/${event.id}`}>View</Button>
                <Button color="red" floated="right" onClick={()=>deleteEvent(event.id)}>Delete</Button>
            </Segment>
        </Segment.Group>
    )
}
export default EventListItem;