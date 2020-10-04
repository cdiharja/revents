import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';

export default function ErrorComponent(){
    const {error} = useSelector(state=>state.async);

    return (
        <Segment>
            <Header content={error?.message || "Oops"}></Header>
            <Button as={Link} to="/events" content="Back to HomePage"/>
        </Segment>
    )
}