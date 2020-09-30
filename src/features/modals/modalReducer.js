const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(payload){
    //console.log(payload);
    return {
        type:OPEN_MODAL,
        payload:payload
    }
}

export function closeModal(){
    return {
        type:CLOSE_MODAL
    }
}

const initialState=null;
export default function modalReducer(state=initialState,{type,payload}){
   // console.log(type);
    switch(type){
        case OPEN_MODAL:
            const {modalType,modalProps} = payload;
            return {modalType,modalProps};
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
}