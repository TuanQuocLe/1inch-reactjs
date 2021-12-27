import Header from './components/Header'
import Body from './components/Body'
import app from './App.css';


function App() {
  // const [tokenList, setTokenList] = useState()

  // const { isInitialized } = useMoralis()

  // useEffect( () => {
  //   async function fetchData () {
  //     await Moralis.enableWeb3()
  //     await Moralis.initPlugins()
  //     if (isInitialized) {
  //       const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
  //     chain: 'eth', // The blockchain you want to use (eth/bsc/polygon)
  //     });
  //     setTokenList(tokens.tokens)
      
  //   }
  // }
  // fetchData()
  // },[isInitialized])
  
  // console.log(tokenList)
  // let tokens = []

  // for (const address in tokenList) {
  //   tokens.push(tokenList[address])
  // }
  // console.log(tokens)

  return (
    <div className="App">
      <Header></Header>
      <Body ></Body>
    </div>
  );
}

export default App;
