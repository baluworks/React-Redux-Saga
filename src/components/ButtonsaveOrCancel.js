import React, { useContext } from "react";
import { Button } from 'semantic-ui-react'
import {NewTheme} from "../context";
function ButtonsaveOrCancel({ addEntry }) {

    const cont = NewTheme();
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button color={cont.buttonColor}>Cancel</Button>
            <Button.Or />
            <Button color='blue' onClick={() => {
                addEntry();
            }}>Ok</Button>
        </Button.Group>
    );
}

export default ButtonsaveOrCancel;