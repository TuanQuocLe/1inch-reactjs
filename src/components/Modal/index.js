import React, { useState, useEffect } from 'react';
import { Wrapper, Content } from './Modal.styled'
import {Moralis} from 'moralis'
import { useMoralis } from 'react-moralis';

const Modal = ({tokens , setToken, setOpenModal}) => {
    
    const handleToken = (token) => {
        setToken(token)
        setOpenModal(false)
    }

    console.log('this is from Modal')
    return (
        <Wrapper >
            <Content >
                    {tokens.map((token, index) => {
                        return (
                                <li key={index} onClick={() => handleToken(token)} >
                                {token.logoURI ? <img src={token.logoURI} /> : 'NOIMAGE'}
                                <span>{token.symbol}</span>
                                </li>

                            
                        )
                    })}
            </Content>
        </Wrapper>
    
    );
};

export default Modal;