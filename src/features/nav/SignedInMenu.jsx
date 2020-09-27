import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Image} from 'semantic-ui-react';

const SignedInMenu = ({handleSignOut})=> {

    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src="/assets/user.png"></Image>
            <Dropdown pointing="top left" text="Bob">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus"/>
                    <Dropdown.Item  text="My Profile" icon="user"/>
                    <Dropdown.Item text="Sign out" icon="power" onClick={handleSignOut}/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}

export default SignedInMenu;