import styled from "styled-components";

export const Wrapper = styled.div `
    background-color: #292a2e ;
    border: 1px solid #545354;
    border-radius: 20px;
    padding: 25px;
    margin: 20px 0;
`

export const Content = styled.div `
    display: flex;
    justify-content: space-between;
    div {
        margin: auto 0;
    }

    input {
        background-color:#242627 ;
        border: 1px solid #3a3d40 ;
        border-radius: 5px;
        padding: 12px 20px;
        color: #a8a8a5;
        outline: none;
        font-size: 15px;
    }
`