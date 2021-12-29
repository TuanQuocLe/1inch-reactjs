import { useState, useEffect, memo, useMemo, useCallback } from "react"
import { Moralis } from "moralis"

import { Wrapper, Content } from "./TokenSelect.styled"
import Modal from "../Modal"

const TokenSelect = ({ tokens, fromData, onGetQuote }) => {
    const [ openModal, setOpenModal ] = useState(false)
    const [ fromToken, setFromToken ] = useState()
    const [ fromAmount, setFromAmount ] = useState(0)
    
    useEffect(() => {
        fromData({
            token: fromToken,
            amount: fromAmount
        })
    }, [fromAmount, fromToken] )
    // const handleData = (e) => {
    //     setFromAmount(e)
    //     fromData({
    //         token: fromToken,
    //         amount: fromAmount
    //     })
    // }
   

    console.log('this is from fromtoken')
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
                    onChange={event => setFromAmount(event.target.value)}/>
            </Content>
        </Wrapper>
    )
}
export default TokenSelect;