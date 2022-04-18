import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Label} from 'reactstrap';
import '../../assets/styles/fonts/index.css';

export const Userpic = styled.div `
position: absolute;
width: 130px;
height: 130px;
left: 618px;
top: 130px;
border-radius: 50%;
background: url('https://cdn-icons-png.flaticon.com/512/1946/1946429.png'), #C4C4C4;
background-size: cover;  
`
export const Username = styled.div `
position: absolute;
width: 250px;
height: 38px;
left: 558px;
top: 270px;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;

color: #000000;
`

export const Userprofilecontainer = styled.div `
position: absolute;
width: 1030px;
height: 421px;
left: 168px;
top: 357px;

background: #EEEEEE ;
border-radius: 10px;
`
export const Botao_editar_perfil = styled.button `
    position: absolute;
    z-index: 10;
    background-color: #080436;
    margin-top: 10px;
    border-radius: 80px;
    padding-left: 10px;
    margin-left: 10px;
    text-align: center;
    width: 95px;
    height: 40px;
    left: 620px;
    top: 290px;
    font-size: 24px;
    font-family: 'Roboto';
    font-style: normal;
    color: #ffffff;
    border-bottom: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    cursor: pointer;
    overflow: hidden;
    
    :hover {
        transition: all ease 0.3s;
        transform: scale(1.1);
        color: #ffffff;
    }
`

