import { useState, useEffect, memo, useMemo, useCallback } from "react"
import { Moralis } from "moralis"

import { Wrapper, Content } from "./TokenSelect.styled"
import Modal from "../Modal"

const TokenSelect = ({ tokens, toData, quote, onGetQuote }) => {
    const [openModal, setOpenModal ] = useState(false)
    const [ toToken, setToToken ] = useState()
    const [ toAmount, setToAmount ] = useState(0)

    const Data = { toToken, toAmount }
    const updateData = useMemo(() => {
        toData(Data)
        
    }, [toAmount, toToken])
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
                    value={quote ? quote.toTokenAmount / 10**toToken.decimals : '0'}
                    onChange={event =>setToAmount(event.target.value)
                    }/>
            </Content>
        </Wrapper>
    )
}
export default TokenSelect;