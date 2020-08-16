import * as ModalTypes from './../constants/modal';

const initialState = {
    showModal : false,
    component : null,
    title : ''
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ModalTypes.SHOW_MODAL : 
            return {
                ...state,
                showModal : true
            }
        case ModalTypes.HIDE_MODAL :
            return {
                ...state,
                showModal : false,
                title : '',
                component : null,
            }
        case ModalTypes.CHANGE_MODAL_TITLE : 
        const { title } = action.payload;
            return {
                ...state,
                title : title
            }
        case ModalTypes.CHANGE_MODAL_CONTENT : 
            const { component } = action.payload;
            return {
                ...state,
                component : component
            }
        default:
            return state;
    }
}

export default modalReducer;