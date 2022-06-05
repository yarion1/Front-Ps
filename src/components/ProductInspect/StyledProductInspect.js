import styled from 'styled-components';

export const ButtonDetails = styled.button `
    height: 66px;
    width: 48%;
    background: #FAF8FF;
    border: 1px solid #B5BCFB;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 100%;
    line-height: 23px;
    overflow: auto;

    color: rgba(0, 0, 0, 0.43);

    :hover{
        background: #E3D6FE;
        border: 1px solid #130A1D;
        color: #130A1D;
    }
    &.selectedPage {
        background: #130A1D;
        border: 1px solid #130A1D;
        color: #ffff;
    }
    @media(max-width:950px){
        width: 100%;
    }


`;

export const Divdetails = styled.div `
    display: flex;
    flex-direction: inline-block;
    z-index:99;
    align-items: center;
    margin-top:30vh;
    margin-left: 20%;
    margin-right: 12.5%;

    @media(max-width:950px){
        left: 15%;
        display: flex;
        margin-top:-30vh;
        flex-direction: column;
    }

`;