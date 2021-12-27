import { Wrapper, Content } from './Header.styled'

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <div>
                    <a href='/'>LuemSwap</a>
                    <a href='/'>Home</a>
                </div>
                <button>Sign in with Metamask</button>
            </Content>
        </Wrapper>
    )
}

export default Header;