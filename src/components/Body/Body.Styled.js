import styled from "styled-components";

export const Wrapper = styled.div `
    /* background-color: #3c3c3c ; */
    color: white;
    /* padding: 25px; */

`

export const Content = styled.div `
    background-color: #191919;
    border: 2px solid #323232;
    border-radius: 20px;
    width: 500px;
    margin: auto;
    padding: 20px;

    label {
        font-size: 25px;
    }

    button {
        width: 100%;
        font-size: large;
        padding: 10px;
        border: solid 1px #323232;
        border-radius: 5px;
        background-color: #4f93d8 ;
        color: white;
        
    }
    button:disabled {
        background-color: white;
        color: #4f93d8 ;
    }
`
