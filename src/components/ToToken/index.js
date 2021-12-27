import { useState, useEffect, memo, useMemo, useCallback } from "react"
import { Moralis } from "moralis"

import { Wrapper, Content } from "./TokenSelect.styled"
import Modal from "../Modal"

const TokenSelect = ({ tokens, toData }) => {
    const [openModal, setOpenModal ] = useState(false)
    const [ toToken, setToToken ] = useState()
    const [ toAmount, setToAmount ] = useState(0)

    useMemo(() => {
        toData({
            token: toToken,
            amount: toAmount
        })
        console.log('inToMemo')

    }, [toToken, toAmount])
    console.log('this is from totoken')


    return (
        <Wrapper>
            {openModal &&
                <Modal
                    tokens={tokens} 
                    setToken={setToToken}
                    setOpenModal={setOpenModal}
                    >
                </Modal>
                }
            <Content>
                <div onClick={() => setOpenModal(true)}>
                   {toToken ? toToken.symbol : 'Select To Token'}
                </div>
                <input 
                    value={toAmount}
                    onChange={event => setToAmount(event.target.value) }/>
            </Content>
        </Wrapper>
    )
}
export default TokenSelect;