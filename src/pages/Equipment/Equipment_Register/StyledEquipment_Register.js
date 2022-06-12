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
`

export const Button_Register_Send = styled(Button)`
    right: 5%;
    bottom: 5%;
    background: #2D1F3F;
    font-family: 'Roboto';
    border-radius: 10px;
    position: absolute;
    width: 15%;
    font-size: 1.2vw;
    border:none;
    border-color: #2D1F3F;
    background: #2D1F3F;
    border-radius: 10px;
    transition: 0.3s;

    :hover{
        background: #618DCE;
        border:none;
        color: #fff;
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
    position: absolute;
    font-size: 1.2vw;
    border:none;
    border-color: #2D1F3F;
    transition: 0.3s;
    width: 15%;
    text-align: center;

    hover{
        background: #618DCE;
        border:none;
        color: #fff;
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