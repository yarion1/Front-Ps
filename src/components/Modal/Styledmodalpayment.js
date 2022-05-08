import styled from 'styled-components'
import {Form} from 'reactstrap';

export const Infoprice = styled.div`
position: relative;
text-align: center;
width: 20%;
margin: 0 auto;
color: #FFFFFF;
font-family: 'Roboto';
font-size: 15px;
border-color: #080436;
background: #080436;
border-radius: 5px;
`

export const Dayrented = styled(Form)`
    margin-top: 5%;
`

export const Pagamentmode = styled.button`
    position: relative;
    width: 20%;
    height: 30px;
    margin: 0 30px;
    margin-top: 3%;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-size: 15px;
    border-color: #080436;
    background: #080436;
    border-radius: 10px;
    transition: 0.3s;

    :hover{
        background: #52AFCC;
        border:none;
        color: #080436;
    }
`