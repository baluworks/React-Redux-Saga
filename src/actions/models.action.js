export const openEditModel = (id) => {
    return { type: 'OPEN_EDIT_MODEL', payload: { id } }
}

export const closeEditModel = () => {
    return { type: 'CLOSE_EDIT_MODEL' };

}