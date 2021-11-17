
const entriesReducer = (state = initialEntries, action) => {

    let newEntries;

    switch (action.type) {
        case 'ADD_ENTRY':
            newEntries = state.concat({ ...action.payload });
            return newEntries;

        case 'REMOVE_ENTRY':
            newEntries = state.filter((entry) => entry.id !== action.payload.id);
            return newEntries;

        case 'UPDATE_ENTRY':
            newEntries = state.map((entry) => (entry.id == action.payload.id)
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