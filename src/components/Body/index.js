import { Moralis } from 'moralis'
import { Wrapper, Content } from "../Body/Body.Styled"
import { useCallback, useEffect, useState } from "react"
import FromToken from "../FromToken"
import ToToken from '../ToToken'


const Body = ({}) => {
    const [ tokenList, setTokenList ] = useState([])
    const [ fromData, setFromData ] = useState()
    const [ toData, setToData ] = useState()

    const wrapSetFromData = useCallback((data) => {
        setFromData(data)
    },[])
    

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
    
    // const getQuote = async () => {
    //     if (!fromToken.address || !toToken.address || !fromAmount ) return
    //     let amount = Number(Moralis.Units.ETH(fromAmount))
        
    //     const quote = await Moralis.Plugins.oneInch.quote({
    //         chain: 'eth',
    //         fromTokenAddress: fromToken.address,
    //         toTokenAddress: toToken.address,
    //         amount: amount,
    //     }) 
    //     console.log(quote)
    // }
    const submitSwap = () => {
        console.log('From: ', fromData, 'To: ', toData)

    }
    return (
        <Wrapper>
            <Content>
                <label>Swap</label>
                <FromToken
                    tokens={tokens}
                    fromData={wrapSetFromData}
                    >
                </FromToken>
                <ToToken
                    tokens={tokens}
                    toData={setToData}
                    >
                </ToToken>
                <p>Estimated Gas: <span>23333</span></p>
                <button onClick={() => submitSwap()}>Swap</button>
            </Content>
        </Wrapper>
    )
}

export default Body