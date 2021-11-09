import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import NewForm from './NewForm';
function ModelEdit({ isOpen, setIsOpen, description, value, isExpense, setDescription, setIsExpense, setValue }) {
    return <Modal open={isOpen} closeIcon onClose={() => setIsOpen()}>
        <Modal.Header>Edit Item</Modal.Header>
        <Modal.Content>
            {/* <Modal.Description>Something here...</Modal.Description> */}
            <NewForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
                setValue={setValue}
            />
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => {
                setIsOpen(false);
            }}>Close</Button>
            <Button primary onClick={() => {
                setIsOpen(false);

            }}>Ok</Button>
        </Modal.Actions>
    </Modal >
}

export default ModelEdit;
