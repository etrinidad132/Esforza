export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "DISPLAY_MODAL";

export const openModal = (modalType) => {
    return ({
        type: OPEN_MODAL,
        modal: modalType
    })
}

export const closeModal = () => {
    return ({
        type: CLOSE_MODAL
    })
}