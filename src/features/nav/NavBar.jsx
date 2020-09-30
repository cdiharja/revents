import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';
import {Container, Menu,Button} from 'semantic-ui-react';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const NavBar = (props)=>{
 
    const {authenticated} = useSelector(state=>state.auth);
   
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to="/" header>
                    <img src="../logo192.png" alt="logo"/>
                    Re-vent
                </Menu.Item>
                <Menu.Item name="events" as={NavLink} to="/events"/>
                 <Menu.Item name="sandbox" as={NavLink} to="/sandbox"/>
                {authenticated && <Menu.Item as={NavLink} to="/createEvent">
                    <Button positive inverted content="Create Event"></Button>
                </Menu.Item>}
                {authenticated ?   <SignedInMenu/> :  <SignedOutMenu />}
            </Container>
        </Menu>
    )
};

export default NavBar;