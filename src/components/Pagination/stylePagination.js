import styled from "styled-components";

export const Paginacao = styled.div `
    width: 100%;
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0.8%;

    li+li{
        margin-left: 1rem;
    }
    
`
export const Button = styled.button `
    border-radius: 3px;
    &.selected{
        background: none;
        font-weight: bold;
        border: none;
    }
`
export const Side = styled.button `
    border: none;
    background: none;

`

