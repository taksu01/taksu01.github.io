import React from 'react';
import styled from '@emotion/styled';

const Modals = ( props ) => {

    const ModalDiv = styled.div`
        position: fixed;
        z-index: 500;
        background-color: white;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 16px;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
    `
    return(
    <>
        <ModalDiv
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(100%)',
                opacity: props.show ? '1' : '0',
                zIndex: props.show ? '10' : '-10'
            }}>
            {props.children}
        </ModalDiv>
    </>
    )
};

export default Modals;