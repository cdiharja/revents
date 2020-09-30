import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu,Button} from 'semantic-ui-react';
import { openModal } from '../modals/modalReducer';

const SignedOutMenu = ({setIsAuthenticated})=> {
    const dispatch = useDispatch();

    return (
        <Menu.Item position="right">
        <Button positive inverted content="Login" onClick={()=>dispatch(openModal({modalType:"LoginForm"}))}></Button>
        <Button positive inverted content="Register" style={{marginLeft:'5px'}}></Button>
        </Menu.Item>
    );
}

export default SignedOutMenu;