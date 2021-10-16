
import React from "react";
import { Form } from 'semantic-ui-react'
import ButtonsaveOrCancel from "./ButtonsaveOrCancel";

function NewEntryForm() {

    return (
        <Form>
            <Form.Group>
                <Form.Input placeholder='New Tranaction' label='Description' width={12} icon='tags'></Form.Input>
                <Form.Input placeholder='100.00' label='Value' icon='dollar' iconPosition='left' width={4} ></Form.Input>
            </Form.Group>
            <ButtonsaveOrCancel />
        </Form>

    );
}
export default NewEntryForm;