import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addEntryRedux, updateEntryRedux } from "../actions/entries.action";
import { closeEditModel } from "../actions/models.action";


function useEntryDetails(desc = "", val = "", isExp = false) {

    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);

    const dispatch = useDispatch();

    useEffect(() => {
        setDescription(desc);
        setIsExpense(isExp);
        setValue(val);
    },
        [desc, val, isExp]
    );

    function addEntry() {
        dispatch(addEntryRedux({
            id: uuidv4(),
            description,
            value,
            isExpense
        }));
        resetData();
    }

    function updateEntry(id) {
        dispatch(updateEntryRedux(id, {

            description,
            value,
            isExpense
        }));
        dispatch(closeEditModel());
        resetData();
    }
    function resetData() {
        setDescription('');
        setValue(0);
        setIsExpense(false)
    }
    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addEntry, updateEntry
    }
}

export default useEntryDetails;