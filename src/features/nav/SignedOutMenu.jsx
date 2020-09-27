import React from 'react';
import { Menu,Button} from 'semantic-ui-react';

const SignedOutMenu = ({setIsAuthenticated})=> {

    return (
        <Menu.Item position="right">
        <Button positive inverted content="Login" onClick={()=>setIsAuthenticated(true)}></Button>
        <Button positive inverted content="Register" style={{marginLeft:'5px'}}></Button>
        </Menu.Item>
    );
}

export default SignedOutMenu;