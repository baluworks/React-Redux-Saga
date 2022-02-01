import { entryActionTypes } from "../constants/entries.types";
export const addEntryRedux = (payload) => {
    return { type: entryActionTypes.ADD_ENTRY, payload }
};

export const removeEntryRedux = (id) => {
    return { type: entryActionTypes.REMOVE_ENTRY, payload: { id } };
}

export const updateEntryRedux = (id, entry) => {
    return { type: entryActionTypes.UPDATE_ENTRY, payload: { id, entry } };
}

export const getAllEntries = () => {
    return { type: entryActionTypes.GET_ENTRIES };
}

export const populateEntries = (entries) => {
    return { type: entryActionTypes.POPULATE_ENTRIES, payload: entries }
}

export const populateEntryDetails = (id, entry) => {
    return { type: entryActionTypes.POPULATE_ENTRY_DETAILS, payload: { id, entry } }
};


export const apiError =(error)=>{
return {type:entryActionTypes.API_ERROR,payload:error}
}