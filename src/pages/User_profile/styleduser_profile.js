import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Label} from 'reactstrap';
import '../../assets/styles/fonts/index.css';

export const Caixa = styled.div `
width: 100%;
align-itens: center;
text-align: center;
`

export const Userpic = styled.div `
width: 130px;
height: 130px;
border-radius: 50%;
background: url('https://cdn-icons-png.flaticon.com/512/1946/1946429.png'), #C4C4C4;
background-size: cover;  
margin: 0 auto;
`
export const Username = styled.div `
width: 250px;
height: 38px;
margin: 0 auto;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #000000;
`

export const Userprofilecontainer = styled.div `
width: 92%;
height: 46vh;
margin: 0 auto;
background: #EEEEEE ;
border-radius: 10px;
text-align: left;
`
export const Botao_editar_perfil = styled.button `
    z-index: 10;
    background-color: #080436;
    border-radius: 80px;
    text-align: center;
    width: 95px;
    height: 40px;
    font-size: 24px;
    font-family: 'Roboto';
    font-style: normal;
    color: #ffffff;
    border: none;
    cursor: pointer;
    overflow: hidden;
    margin: 2%;

    :hover {
        transition: all ease 0.3s;
        transform: scale(1.1);
        color: #ffffff;
    }
`
