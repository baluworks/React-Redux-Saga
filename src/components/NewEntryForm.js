
import React from "react";
import { Form } from 'semantic-ui-react'
import ButtonsaveOrCancel from "./ButtonsaveOrCancel";
import NewForm from './NewForm';

function NewEntryForm({ addEntry, description, setDescription, value, setValue, isExpense, setIsExpense, resetData }) {


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
                resetData={resetData} />
        </Form>

    );
}
export default NewEntryForm;