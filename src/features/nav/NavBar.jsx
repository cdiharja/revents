import React from 'react';
import {Container, Menu,Button} from 'semantic-ui-react';

const NavBar = (props)=>{
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="../logo192.png" alt="logo"/>
                    Re-vent
                </Menu.Item>
                <Menu name="events"/>
                <Menu.Item>
                    <Button positive inverted content="Create Event" onClick={()=>props.setFormOpen(true)}></Button>
                </Menu.Item>
                <Menu.Item position="right">
                    <Button positive inverted content="Login"></Button>
                    <Button positive inverted content="Register" style={{marginLeft:'5px'}}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
};

export default NavBar;