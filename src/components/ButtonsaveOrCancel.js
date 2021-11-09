import React from "react";
import { Button } from 'semantic-ui-react'
function ButtonsaveOrCancel({ addEntry, resetData }) {

    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button color='blue' onClick={() => {
                addEntry();
                resetData();
            }}>Ok</Button>
        </Button.Group>
    );
}

export default ButtonsaveOrCancel;