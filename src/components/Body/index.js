import { Moralis } from 'moralis'
import { Wrapper, Content } from "../Body/Body.Styled"
import { useCallback, useEffect, useMemo, useState } from "react"
import FromToken from "../FromToken"
import ToToken from '../ToToken'
import { NotAuthenticatedError } from 'react-moralis'


const Body = ({}) => {

    const [ tokenList, setTokenList ] = useState([])
    const [ fromData, setFromData ] = useState()
    const [ toData, setToData ] = useState()
    const [ quote, setQuote ] = useState()

    

    useEffect( () => {
        async function fetchData () {
          await Moralis.enableWeb3()
          await Moralis.initPlugins()
          
          const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
          chain: 'eth', // The blockchain you want to use (eth/bsc/polygon)
          });
          setTokenList(tokens.tokens)
          
      }
      fetchData()
      },[])
      
    let tokens = []

    for (const address in tokenList) {
    tokens.push(tokenList[address])
    }

    // useMemo( async () => {
    //     if (!fromData.token.address || !toData.token.address || !fromData.amount ) return
    //     let amount = Number(Moralis.Units.ETH(fromData.amount))
        
    //     setQuote(await Moralis.Plugins.oneInch.quote({
    //         chain: 'eth',
    //         fromTokenAddress: fromData.token.address,
    //         toTokenAddress: toData.token.address,
    //         amount: amount,
    //     }) )
    // },[fromData])
    const getQuote = async () => {
        if (!fromData.token.address || !toData.token.address || !fromData.amount ) return
        let amount = Number(fromData.amount * 10**fromData.token.decimals)
        const quote = await Moralis.Plugins.oneInch.quote({
            chain: 'eth',
            fromTokenAddress: fromData.token.address,
            toTokenAddress: toData.token.address,
            amount: amount,
        }) 
        setQuote(quote)

        
        
    }

    const submitSwap = () => {
        console.log('From: ', fromData, 'To: ', toData)
        getQuote()

        
    }
    console.log(quote)
    return (
        <Wrapper>
            <Content>
                <label>Swap</label>
                <FromToken
                    tokens={tokens}
                    fromData={setFromData}
                    >
                </FromToken>
                <ToToken
                    tokens={tokens}
                    toData={setToData}
                    quote={quote}
                    >
                </ToToken>
                <p>Estimated Gas: <span>{quote && quote.estimatedGas}</span></p>
                <button onClick={() => submitSwap()}>Swap</button>
            </Content>
            {quote && quote.error}
        </Wrapper>
    )
}

export default Body