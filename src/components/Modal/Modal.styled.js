import styled from "styled-components";

export const Wrapper = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
`
export const Content = styled.div `
    width: 400px;
    height: 700px;
    border-radius: 5px;
    border: silver solid 2px;
    background-color: white;
    margin: auto;
    overflow: scroll;
    color: black;
    li {
        display: flex;
        padding: 5px 20px;
        list-style: none;
        :hover {
            background-color: rgba(0, 0, 0, .2) ;
            cursor: pointer;
            color: white;
        }
    }
    span {
        margin: auto 10px;
        font-size: 18px;
    }
    img {
        width: 40px;
        height: 40px;
    }
`
