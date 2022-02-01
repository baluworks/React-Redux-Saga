import { modelActionTypes } from "../constants/model.type";

export const openEditModel = (id) => {
    return { type: modelActionTypes.OPEN_EDIT_MODEL, payload: { id } }
}

export const closeEditModel = () => {
    return { type: modelActionTypes.CLOSE_EDIT_MODEL };

}