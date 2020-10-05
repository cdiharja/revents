import React from 'react';
import {  useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Dropdown, Image} from 'semantic-ui-react';
import { signOutFirebase } from '../../firestore/firebaseService';

const SignedInMenu = ()=> {
    const history = useHistory();
    const {currentUser} = useSelector(state=>state.auth);
    async function handleSignOut(){
        try{
            await signOutFirebase();
            history.push('/');
        }catch(error){
            console.log(error);
        }
    }
    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src={currentUser.photoURL || "/assets/user.png"}></Image>
            <Dropdown pointing="top left" text={currentUser.displayName}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus"/>
                    <Dropdown.Item  text="My Profile" icon="user"/>
                    <Dropdown.Item as={Link} to="/account" text="My Account" icon="settings"/>
                    <Dropdown.Item text="Sign out" icon="power" 
                        onClick={()=>{

                           handleSignOut();
                          
                            }}
                    />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}

export default SignedInMenu;