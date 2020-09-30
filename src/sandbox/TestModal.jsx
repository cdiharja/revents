import React from 'react';
import ModalWrapper from '../features/modals/ModalWrapper';

export default function TestModal({data}){
    return (
        <ModalWrapper size="mini" header="test header">
            <div> this is {data}</div>
        </ModalWrapper>
    )
}