import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../features/modals/modalReducer';
import {  increment, decrement } from './testReducer';

export default function Sandbox(){
    const dispatch = useDispatch();
    const data = useSelector(state=>state.test.data);
    return (
        <> 
            <h1> Test</h1>
            <h3>data : {data}</h3>
            <Button onClick={()=>dispatch(increment(20))}  color="green" content="increment"/>
            <Button onClick={()=>dispatch(decrement(5))} color="red" content="decrement"/>

            
            <Button onClick={()=>dispatch(openModal({modalType:'TestModal',modalProps:{data}}))}  color="teal" content="open modal"/>
        </>
    )
}