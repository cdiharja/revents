import React from 'react';
import { Form, Header, Segment ,Button} from 'semantic-ui-react';

function EventForm({setFormOpen}){
    return (
        <Segment clearing>
            <Header content="create new event"/>
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Title"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City"/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue"/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date"/>
                </Form.Field>
                <Button type="submit" floated="right" positive content="Submit"></Button>
                <Button onClick={()=>setFormOpen(false)} type="submit" floated="right" content="Cancel"></Button>
            </Form>
        </Segment>
    )
}
export default EventForm;