import { asyncActionError, asyncActionFinish, asyncActionStart } from "../store/asyncReducer";
import { delay } from "../util/util";
import {  toast } from 'react-toastify';
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(amount){
    return async function(dispatch){
        dispatch(asyncActionStart());
        try{
           // throw('ooops');
            await delay(1000);
          
            dispatch({
                type:INCREMENT_COUNTER,
                payload:amount
            });
            dispatch(asyncActionFinish());
        }catch(error)
        {   dispatch(asyncActionError(error));
            toast.error(error);
            
         //   dispatch(asyncActionFinish());

        }
       
    }
    // return {
    //     type:INCREMENT_COUNTER,
    //     payload:amount
    // }
}

export function decrement(amount){
    return async function(dispatch){
        dispatch(asyncActionStart());
        try{
            await delay(1000);
            dispatch({
                type:DECREMENT_COUNTER,
                payload:amount
            });
            dispatch(asyncActionFinish());
        }catch(error)
        {   dispatch(asyncActionError(error));

        }
       
    }
}
    // return {
    //     type:INCREMENT_COUNTER,
    //     payload:amount
    // }
// }
// export function decrement(amount){
//     return {
//         type:DECREMENT_COUNTER,
//         payload:amount
//     }
// }

const initialState = {
    data:42
};
const testReducer = (state = initialState,action)=>{
    switch(action.type){
        case INCREMENT_COUNTER:
            return {
                ...state,
                data:state.data+action.payload
            };
        case DECREMENT_COUNTER:
            return {
                ...state,
                data:state.data-action.payload
            };
        default:
            return state;
    }
}
export default testReducer;

// export default function testReducer(state = initialState){
//     return state;
// }