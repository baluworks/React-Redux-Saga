
import React from "react";

import { Form } from 'semantic-ui-react'

import ButtonsaveOrCancel from "./ButtonsaveOrCancel";
import NewForm from './NewForm';

import useEntryDetails from '../hooks/useEntryDetails';
function NewEntryForm({ resetData }) {

    const { description, setDescription, value, setValue, isExpense, setIsExpense, addEntry } = useEntryDetails();
    return (
        <Form unstackable>
            <NewForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setIsExpense={setIsExpense}
                setValue={setValue} />
            <ButtonsaveOrCancel
                addEntry={addEntry}
            />
        </Form>

    );
}
export default NewEntryForm;