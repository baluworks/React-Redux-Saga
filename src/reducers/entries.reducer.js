import { entryActionTypes } from "../constants/entries.types";

const entriesReducer = (state = initialEntries, action) => {

    let newEntries;

    switch (action.type) {
        case entryActionTypes.POPULATE_ENTRIES:
            console.log("PaayLoad from reducer");
            return action.payload;

        case entryActionTypes.ADD_ENTRY:
            console.log("ADDED TO STORE:");
            newEntries = state.concat({ ...action.payload });
            return newEntries;

        case entryActionTypes.REMOVE_ENTRY:
            newEntries = state.filter((entry) => entry.id !== action.payload.id);
            return newEntries;

        case entryActionTypes.UPDATE_ENTRY:
        case entryActionTypes.POPULATE_ENTRY_DETAILS:
            newEntries = state.map((entry) => (entry.id === action.payload.id)
                ? { ...entry, ...action.payload.entry }
                : { ...entry });
            return newEntries;
    

        default:
            return state;
    }
}
export default entriesReducer;

var initialEntries = [
]