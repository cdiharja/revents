import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Dropdown, Image} from 'semantic-ui-react';
import { SignOutUser } from '../auth/authAction';

const SignedInMenu = ()=> {
    const dispatch = useDispatch();
    const history = useHistory();
    const {currentUser} = useSelector(state=>state.auth);

    return (
        <Menu.Item position="right">
            <Image avatar spaced="right" src={currentUser.photoURL || "/assets/user.png"}></Image>
            <Dropdown pointing="top left" text={currentUser.email}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus"/>
                    <Dropdown.Item  text="My Profile" icon="user"/>
                    <Dropdown.Item text="Sign out" icon="power" 
                        onClick={()=>{
                            dispatch(SignOutUser())
                            history.push('/');
                            }}
                    />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    );
}

export default SignedInMenu;