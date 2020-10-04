import { fetchSampleData } from '../../api/mockApi';
import { asyncActionError, asyncActionFinish, asyncActionStart } from '../../store/asyncReducer';
import {CREATE_EVENT,UPDATE_EVENT,DELETE_EVENT, FETCH_EVENTS} from './eventConstants';

export function createEvent (event){
    return {
        type:CREATE_EVENT,
        payload:event
    }
}
export function updateEvent (event){
    return {
        type:UPDATE_EVENT,
        payload:event
    }
}
export function deleteEvent (event){
    return {
        type:DELETE_EVENT,
        payload:event
    }
}

export function loadEvents (){
    return async function (dispatch){
        dispatch(asyncActionStart());
        try{
            const events = await fetchSampleData();
            dispatch({  
                type:FETCH_EVENTS,
                payload:events
            })
            dispatch(asyncActionFinish());
        }catch(error){
                dispatch(asyncActionError());
        }
    }
  
}


export function listenToEvents (events){
   return{  
                type:FETCH_EVENTS,
                payload:events
            }
  
}


