import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dataFromSnapshot } from "../firestore/firestoreService";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../store/asyncReducer";

export default function useFirestoreDoc({query,data,deps,shouldExecute=true}){
    const dispatch = useDispatch();

    useEffect(()=>{
        if(!shouldExecute) return;
        dispatch(asyncActionStart());
        const unsubscribe = query().onSnapshot(
            snapshot=>{
                if(!snapshot.exists){
                    dispatch(asyncActionError({code:"not-found",message:"coulnt found document"})) ;
                    return;
                }
                data(dataFromSnapshot(snapshot));
                dispatch(asyncActionFinish());
            },
            error=>dispatch(asyncActionError())
        )
        return ()=>{
            unsubscribe();
        }
    },deps); //eslint-disable-line
}