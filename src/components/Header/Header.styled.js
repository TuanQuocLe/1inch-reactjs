import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #333 ;
    margin-bottom: 40px;
    a {
        text-decoration: none;
        color: white;
    }
    
`
export const Content = styled.div `
    max-width: 1280px;
    padding: 12px;
    margin: auto;
    align-items: center;
    color: white;
    font-size: 25px;
    display: flex;
    justify-content: space-between;
    background-color: #333;
    a {
        margin-right: 30px;
        background-color: transparent;
    }
    button {
        border: 1px solid #4f93d8;
        color: #4f93d8;
        background-color: transparent;
        font-size: 18px;
        padding: 5px 8px;
        border-radius: 5px;
    }
`