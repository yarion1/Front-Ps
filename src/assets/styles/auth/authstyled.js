import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Label} from 'reactstrap';
import '../fonts/index.css';


export const Globalpage = styled.body `
 margin:0;
`;

export const Divleft  = styled.div `
    background: #080436;
    min-width: 40%;
    background-image: url(${require(`../../img/logintela.png`)});
    background-size: 850px;
    display: inline-block;
    height: 100vh;

    @media (max-width: 800px){
        width: 100%;
        display: flex;
        flex-direction: row;
        height: 20em;
    }
    @media (max-width: 610px){
        width: 100vh;
        display: flex;
        flex-direction: row;
        height: 20em;
    }

`;

export const Divright = styled.div `
    min-width: 60%;
    display: inline-block;
    height: 100vh;

    @media (max-width: 800px){
        width: 100%;
        display: flex;
        flex-direction: row;
    }
`;

export const BotaoLogin =  styled.div `
    position: absolute;
    width: 170px;
    height: 90px;
    right: 56%;
    top: 106px;
    background: #FFFFFF;
    border-radius: 80px;

    @media(max-width: 800px){
        display: none;
    }

`;

export const ButtonSign = styled.button `
    position: absolute;
    z-index: 10;
    background-color: #080436;

    margin-top: 10px;
    border-radius: 80px;
    padding-left: 10px;
    margin-left: 10px;
    text-align: center;
    width: 95px;
    height: 50px;
    right: 60.4%;
    top: 195px;
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
    
    :hover{
        transition: all ease 0.3s;
        transform: scale(1.1);
        color: #ffffff;
    }
    @media (max-width: 800px){
        top: 12em;
        right: 12%;
        width:105.5px ;
        height: 80px;
        border-radius: 20px;
        padding-top: 10px;
    }
`;

export const ButtonLogin = styled.div `
    position: absolute;
    z-index: 10;
    background-color: #ffffff;
    margin-top: 20px;
    border-radius: 80px;
    padding-left: 10px;
    margin-left: 10px;
    text-align: center;
    width: 60%;
    height: 50px;
    font-size: 25px;
    font-family: 'Roboto';
    font-style: normal;
    color: #080436;
    border-bottom: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    cursor: pointer;
    overflow: hidden;

    :hover {
        transition: all ease 0.3s;
        transform: scale(1.1);
        color: #626C6D;
    }

    @media(max-width: 800px){
        display: none;
    }
`;


export const TitleLog = styled.h2 `
    position: absolute;
    right: 22%;
    width: 222px;
    height: 53px;
    top: 2em;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 59px;
    text-align: center;

    color: #080436;

    mix-blend-mode: normal;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


    @media(max-width: 800px){
        position:fixed;
        top: 8em;
        left: 28%;
    }

`;

export const Formlogin = styled(Form) `
    position: absolute;
    top: 15em;
    right: 28%;

    @media(max-width: 800px){
        top: 32em;
        left: 20%;
        width: 250px;
    }
    
`;

export const InputLogin = styled(Input)`

    border-top: #ffffff;
    border-right: #ffffff;
    border-left: #ffffff;
    padding-bottom: 2px;
    margin-bottom: 50px;
    border-bottom: 1px solid #9DACB1;
    font-size: 15px;
    height: 40px;
    width: 200%;
    padding-left: 20px;
    border-radius: 0;


`;

export const Buttonlogin  = styled(Button) `
  hover{
    transition: all ease 0.3s;
    transform: scale(1.1);
  }
`;

export const Divbtn = styled.div`
    position: absolute;
    top: 16em;
    right: -5%;

`;

export const Labell = styled(Label) `
    color:#929FA7;
`;

export const Iconemail = styled.div `
    position: absolute;
    top: 16em;
    right: 43%;

    @media (max-width: 1200px){
        position: absolute;
         top: 16em;
         left: 52%;
    }
    @media (max-width: 800px){
        position: absolute;
        top: 33em;
        right: 82%;
    }
`;

export const Iconpassword = styled.div `
    position: absolute;
    top: 22.7em;
    right: 43%;

    @media (max-width: 1200px){
        position: absolute;
       display: flex
        top: 22.7em;
        left: 52%;
    }
    @media (max-width: 800px){
        position: absolute;
            top:39.8em;
            right: 82%;
    }
`;

