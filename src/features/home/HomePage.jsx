import React from 'react';
import { Segment,Container,Header,Button,Icon } from 'semantic-ui-react';

export default function HomePage({history}){
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container>
                <Header as="h1" inverted>
                    Re-vent
                </Header>
                <Button size="huge" inverted onClick={()=> history.push("./events")}>
                    Get Started
                    <Icon name="right arrow" inverted/>
                </Button>
            </Container>
        </Segment>
    )
}