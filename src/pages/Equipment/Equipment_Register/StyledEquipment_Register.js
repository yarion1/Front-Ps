import styled from "styled-components"
import { Button, Form } from "reactstrap"

export const Equipment_RegisterForm = styled.div `
    position: absolute;
    width: 60%;
    height: 70%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background-color: rgb(255, 255, 255);
    flex: 1 1 0px;

    @media(max-width: 670px){
        height: 530px;
        width: 400px;
    }
`

export const Button_Register_Send = styled(Button)`
    right: 5%;
    bottom: 5%;
    background: #2D1F3F;
    font-family: 'Roboto';
    border-radius: 10px;
    position: absolute;
    width: 100px;
    border:none;
    transition: 0.3s;

    :hover{
        background: #618DCE;
        border:none;
        color: #fff;
      }
    
    @media(max-width: 1200px){
        bottom: -5%;
        right: 45%;
      }
    @media(max-width: 700px){
        right: 10%;
    }
`

export const Button_Register_Cancel = styled(Button)`
    right: 24%;
    bottom: 5%;
    background: grown;
    border-radius: 10px;
    position: absolute;
    font-family: 'Roboto';
    border-radius: 10px;
    border:none;
    transition: 0.3s;
    width: 100px;
    text-align: center;

    hover{
        background: #618DCE;
        border:none;
        color: #fff;
      }
    
      @media(max-width: 1200px){
        bottom: -5%;
        right: 75%;
      }
      
      @media(max-width: 700px){
        right: 60%;
      }
`

export const Equipment_Form = styled(Form)`
    position: absolute;
    width: 80%;
    height: 70%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 20%;
    margin: auto;
`