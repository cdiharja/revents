import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {Container, Menu,Button} from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const NavBar = (props)=>{
    const [isAuthenticated, setIsAuthenticated]=useState(false);
    const history = useHistory();

    const handleSignOut = ()=>{
        setIsAuthenticated(false);
        history.push("/");
    };
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to="/" header>
                    <img src="../logo192.png" alt="logo"/>
                    Re-vent
                </Menu.Item>
                <Menu.Item name="events" as={NavLink} to="/events"/>
                 <Menu.Item name="sandbox" as={NavLink} to="/sandbox"/>
                {isAuthenticated && <Menu.Item as={NavLink} to="/createEvent">
                    <Button positive inverted content="Create Event"></Button>
                </Menu.Item>}
                {isAuthenticated ?   <SignedInMenu handleSignOut={handleSignOut}/> :  <SignedOutMenu setIsAuthenticated={setIsAuthenticated}/>}
            </Container>
        </Menu>
    )
};

export default NavBar;