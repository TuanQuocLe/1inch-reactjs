
import { Wrapper, Content } from './Header.styled'


const Header = ({logIn}) => {
    
    return (
        <Wrapper>
            <Content>
                <div>
                    <a href='/'>LumSwap</a>
                    <a href='/'>Home</a>
                </div>
                <button onClick={logIn}>{ 'Sign in with Metamask'}</button>
            </Content>
        </Wrapper>
    )
}

export default Header;