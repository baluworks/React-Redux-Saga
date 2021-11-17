import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import NewForm from './NewForm';
import { closeEditModel } from '../actions/models.action'
import useEntryDetails from '../hooks/useEntryDetails'
function ModelEdit({ isOpen, description, value, isExpense, id }) {
    const dispatchAction = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense);
    return <Modal open={isOpen} closeIcon onClose={() => dispatchAction(closeEditModel())}>
        <Modal.Header>Edit Item</Modal.Header>
        <Modal.Content>
            {/* <Modal.Description>Something here...</Modal.Description> */}
            <NewForm
                description={entryUpdate.description}
                value={entryUpdate.value}
                isExpense={entryUpdate.isExpense}
                setDescription={entryUpdate.setDescription}
                setIsExpense={entryUpdate.setIsExpense}
                setValue={entryUpdate.setValue}
            />
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => {
                dispatchAction(closeEditModel())
            }}>Close</Button>
            <Button primary onClick={() => {
                entryUpdate.updateEntry(id);
            }}>Ok</Button>
        </Modal.Actions>
    </Modal >
}

export default ModelEdit;
