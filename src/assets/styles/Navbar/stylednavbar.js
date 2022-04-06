import styled from "styled-components";
import {Form} from 'reactstrap';
import {AiOutlineSearch} from 'react-icons/ai';
import '../fonts/index.css';

export const Navbar = styled.nav `
    background-color:#080436 ;
    height: 90px;
    width: auto;
    display: flex;


`;

export const Searchform = styled(Form) `
    display: flex;
    position: absolute;
    width: 450px;
    height: 40px;
    right: 40%;
    top: 19px;

`;

export const Buttonsearch = styled.button `
    position: absolute;  
    background-color: none;
    background: none;
    height: 35px;
    margin-top: 1px;
    padding-right: 5px;
    border: none;
    right: 40.2%;
    top: 22px;
    padding-left: 0 auto;

`;

export const Searchicon = styled(AiOutlineSearch) `
    color: #080436;
    padding-bottom: 13px;
    width: 30px;
    height: 40px;

`;

export const UlItens = styled.ul `
    display: flex;
    flex-direction: row;
    padding-left: 90px;

    li{
        padding: 10px 40px 0px 10px;
        list-style-type: none;
    }
    a {
        font-family:Arial, Helvetica, sans-serif;
        font-style: normal;
        color:#080436;
        font-weight: 400;
        text-decoration: none;
    }

    a:hover{
        color: rgb(82, 86, 161);
    }
`;

