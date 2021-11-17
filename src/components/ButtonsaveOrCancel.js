import React from "react";
import { Button } from 'semantic-ui-react'
function ButtonsaveOrCancel({ addEntry }) {

    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button color='blue' onClick={() => {
                addEntry();
            }}>Ok</Button>
        </Button.Group>
    );
}

export default ButtonsaveOrCancel;