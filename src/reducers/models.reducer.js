import { modelActionTypes } from "../constants/model.type";

const reducer = (state = { isOpen: false }, action) => {

    switch (action.type) {
        case modelActionTypes.OPEN_EDIT_MODEL:
            return { ...state, isOpen: true, id: action.payload.id }
        case modelActionTypes.CLOSE_EDIT_MODEL:
            return { ...state, isOpen: false, id: null }

        default:
            return state;
    }
}

export default reducer;