import React from "react";
import { Checkbox, Container, Form, Segment } from "semantic-ui-react";

function NewForm({ description, value, isExpense, setDescription, setValue, setIsExpense }) {
    return (
        <Container>
            <Form.Group>
                <Form.Input
                    placeholder='New Tranaction'
                    label='Description'
                    width={12}
                    icon='tags'
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}></Form.Input>
                <Form.Input
                    placeholder='100.00'
                    label='Value' icon='dollar'
                    iconPosition='left'
                    width={4}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}></Form.Input>
            </Form.Group>
            <Segment compact>
                <Checkbox label='is Expense' checked={isExpense} toggle onChange={() => setIsExpense((oldvalue) => !oldvalue)}></Checkbox>
            </Segment>
        </Container>)
}

export default NewForm;