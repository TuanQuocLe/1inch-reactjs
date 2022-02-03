import { Moralis } from 'moralis'
import { Wrapper, Content } from "../Body/Body.Styled"
import { useCallback, useEffect, useMemo, useState } from "react"
import Header from '../Header'
import FromToken from "../FromToken"
import ToToken from '../ToToken'


const Body = ({}) => {
    const [ buttonDisabled, setButtonDisabled ] = useState(true)
    const [ tokenList, setTokenList ] = useState([])
    const [ fromData, setFromData ] = useState({})
    const [ toData, setToData ] = useState({})
    const [ quote, setQuote ] = useState()
    
    useEffect( () => {
        async function fetchData () {
          await Moralis.enableWeb3()
          await Moralis.initPlugins()
          
          const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
          chain: 'eth', // The blockchain you want to use (eth/bsc/polygon)
          });
          setTokenList(tokens.tokens)
        if(Moralis.User.current()) {
          setButtonDisabled(false)
        }  
      }
      fetchData()
      
      },[])
      
    let tokens = []

    for (const address in tokenList) {
    tokens.push(tokenList[address])
    }
    const currentUser = Moralis.User.current()
    if (currentUser) setButtonDisabled(false)
    const logIn = async () => {
        try {
            if (!currentUser) {
                currentUser = await Moralis.Web3.authenticate()
            }
            setButtonDisabled(false)
                   
        } catch (error) {
            console.log(console.error())
        }
    }

    const getQuote = async () => {
        console.log('from: ', fromData, 'to: ',toData)
        if (fromData.fromToken && toData.toToken && fromData.fromAmount) {
            console.log('inQutoe')
            const amount = Number(fromData.fromAmount * 10**fromData.fromToken.decimals)
            const quote = await Moralis.Plugins.oneInch.quote({
                chain: 'eth',
                fromTokenAddress: fromData.fromToken.address,
                toTokenAddress: toData.toToken.address,
                amount: amount,
            }) 
            setQuote(quote)

        } 
    }
    useMemo(()=> {
        getQuote()
    }, [fromData, toData])
    
    const doSwap = async (amount, address) => {
        console.log('in doSwap')
        await  Moralis.Plugins.oneInch.swap({
                chain: 'eth',
                fromTokenAddress: fromData.fromToken.address,
                toTokenAddress: toData.toToken.address,
                amount: amount,
                fromAddress: address,
                slippage: 1,
            })
    }

    const trySwap = async () => {
        let address = Moralis.User.current().get('ethAddress')
        let amount = Number(fromData.amount* 10**fromData.fromToken.decimals)

        if (fromData.fromToken.symbol !== 'ETH') {
            const allowance = await Moralis.Plugins.oneInch.hasAllowance({
                chain: 'eth',
                fromTokenAddress: fromData.fromToken.address,
                fromAddress: address,
                amount: amount,
            })
            if (!allowance) {
                await Moralis.Plugins.oneInch.approve({
                    chain: 'eth',
                    tokenAddress: fromData.fromToken.address,
                    fromAddress: address,
                })
            }
        }
        let receipt = await doSwap(amount, address)
        alert('swap completed')
    }
    

    
    return (
        <Wrapper>
            <Header logIn={logIn} />
            <Content>
                <label>Swap</label>
                <FromToken
                    onGetQuote={getQuote}
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
                <button disabled={buttonDisabled} onClick={trySwap}>Swap</button>
                {quote && quote.error}
            </Content>
        </Wrapper>
    )
}

export default Body