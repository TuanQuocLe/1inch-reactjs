import { useState, useEffect, useEffectLayout, memo, useMemo, useCallback } from "react"
import { Moralis } from "moralis"

import { Wrapper, Content } from "./TokenSelect.styled"
import Modal from "../Modal"

const TokenSelect = ({ tokens, fromData, onGetQuote }) => {
    const [ openModal, setOpenModal ] = useState(false)
    const [ fromToken, setFromToken ] = useState()
    const [ fromAmount, setFromAmount ] = useState(0)

    const Data = {fromToken, fromAmount}

    const updateData = useMemo(() => {
        fromData(Data)
    }, [fromToken, fromAmount])
    
    const handleFromData = (event) => {
        setFromAmount(event.target.value)
        
    }
    return (
        <Wrapper>
            {openModal &&
                <Modal
                    tokens={tokens}
                    setToken={setFromToken}
                    setOpenModal={setOpenModal}
                    >
                </Modal>
                }
            <Content>
                <div onClick={() => setOpenModal(true)}>
                   {fromToken ? fromToken.symbol : 'Select From Token'}
                </div>
                <input 
                    value={fromAmount}
                    onChange={event => handleFromData(event)}/>
            </Content>
        </Wrapper>
    )
}
export default TokenSelect;