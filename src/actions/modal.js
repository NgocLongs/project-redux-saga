import * as ModalTypes from './../constants/modal';

export const showModal = () => {
    return {
        type : ModalTypes.SHOW_MODAL
    }
}

export const hideModal = () => {
    return {
        type : ModalTypes.HIDE_MODAL
    }
}

export const changeModalTitle = (title) => {
    return {
        type : ModalTypes.CHANGE_MODAL_TITLE,
        payload : {
            title
        }
    }
}

export const changeModalContent = (component) => {
    return {
        type : ModalTypes.CHANGE_MODAL_CONTENT,
        payload : {
            component
        }
    }
}