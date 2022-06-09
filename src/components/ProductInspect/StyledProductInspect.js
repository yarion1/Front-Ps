import styled from 'styled-components';

export const ButtonDetails = styled.button `
    width: 100%;
    height: 66px;
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
 


`;

export const Divdetails = styled.div `
    display: flex;
    position: relative;
    flex-direction: inline-block;
    align-items: center;
    margin-top:10%;
    margin-left: 20%;
    margin-right: 15%;

    @media(max-width:950px){
        left: 1%;
        display: flex;
        margin-top:5vh;
        flex-direction: column;
    }

`;