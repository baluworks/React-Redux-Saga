import { Header } from "semantic-ui-react";
import React, { Fragment } from "react";
import { Button } from 'semantic-ui-react';
import {NewTheme} from '../context';
function MainHeader({ title, type = 'h1' ,changeHandler}) {
    const cont = NewTheme();
    const themeChanger = title ==='New Budget' ? <Button color={cont.buttonColor} primary onClick={() => {
        changeHandler()
      }}>Theme Change</Button> :null;
    return (
        <Fragment>
            <Header as={type}>{title}</Header>
           {themeChanger} 
        </Fragment>
    );
}
export default MainHeader;