import styled from "styled-components";
import {Form} from 'reactstrap';
import {IoBagHandleOutline} from 'react-icons/io5';
import '../fonts/index.css';

export const Navbar = styled.nav `
    display: flex;
    position: sticky;
    z-index:100;
    background-color:#080436 ;
    height: 90px;
    width: 100%;

    @media (max-width: 869px){
        width: 100vh;
    }

`;

export const Searchform = styled(Form) `
    display: flex;
    position: sticky;
    width: 450px;
    height: 40px;
    top: 19px;
`;

export const Buttonsearch = styled.button `
    display: flex;
    position: sticky;
    background-color: none;
    background: none;
    height: 35px;
    margin-top: 1px;
    margin-right: 10px;
    border: none;
    top: 22px;
    float: right;
    align-content: right;
`;

export const UlItens = styled.ul `

    display: flex;
    position: sticky;
    justify-self: center;
    align-items: center;
    justify-items: space-between;
    transition: -webkit-transform 0.2s cubic-bezier(0.86, 0, 0.07, 0.1);
    transition: transform 0.2s cubic-bezier(0.86, 0, 0.07, 0.1);
    z-index: 2000;
    padding-bottom: 0.5%;
    flex-direction: row;
 
    
   

    li{
        padding: 10px 40px 0px 10px;
        list-style-type: none;
        align-items: center;
    }
    a {
        font-family:Arial, Helvetica, sans-serif;
        font-style: normal;
        font-size: 16px;
        color:#080436;
        font-weight: 400;
        text-decoration: none;
        transition: 0.2s;
    }

    a:hover{
        color: #52AFCC;
        
    }
`;

export const Linha = styled.div `
    width: 100%;
    position: sticky;
    border-bottom: 1px solid #E2E1DD;
    border-left:none;
    border-top: none;
    border-right: none;
    justify-self: center;
    align-items: center;
    justify-items: space-between;
    background: #ffff;

    @media (max-width: 869px){
        width: 100vh;
    }
`;


export const IconCart = styled(IoBagHandleOutline) `
    color: #fff;
    width: 30px;
    height: 30px;

`;

export const Titlecart = styled.h2 `
    color: #fff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    font-size: 12px;
    line-height: 14px;

`;