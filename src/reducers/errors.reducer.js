import { entryActionTypes } from "../constants/entries.types";

const errorsReducer = (state = null, action) => {

    let error;

    switch (action.type) {
        case entryActionTypes.API_ERROR:
            return action.payload;
        default:
            return state;
    }
}
export default errorsReducer;

var errors = [
]