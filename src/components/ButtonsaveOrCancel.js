import React from "react";
import { Button } from 'semantic-ui-react'
function ButtonsaveOrCancel() {

    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button color='blue'>Ok</Button>
        </Button.Group>
    );
}

export default ButtonsaveOrCancel;