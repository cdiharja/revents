import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../features/modals/modalReducer';
import TestPlaceInput from './testplacesInput';
import {  increment, decrement } from './testReducer';

export default function Sandbox(){
    const dispatch = useDispatch();
    const data = useSelector(state=>state.test.data);
    const [target,setTarget] = useState(null);
    const {loading}=useSelector(state=>state.async);
    return (
        <> 
            <h1> Test</h1>
            <h3>data : {data}</h3>
            <Button loading={loading && target==="inc"} 
            onClick={(e)=>{
                dispatch(increment(20));
                setTarget(e.target.name);
            }}  
            color="green" content="increment" name="inc"/>
            <Button  loading={loading && target==="dec"} 
            onClick={(e)=>{
                dispatch(decrement(5));
                setTarget(e.target.name);
            }} color="red" content="decrement" name="dec"/>

            
            <Button onClick={()=>dispatch(openModal({modalType:'TestModal',modalProps:{data}}))}  color="teal" content="open modal"/>

            <div>
                <TestPlaceInput/>
            </div>
        </>
    )
}