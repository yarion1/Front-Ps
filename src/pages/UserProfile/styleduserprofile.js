import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Label} from 'reactstrap';
import '../../assets/styles/fonts/index.css';

export const User_profile_button = styled.button `

position: absolute;
background-color: #2166c1;
margin-top: 10px;
border-radius: 80px;
padding-left: 10px;
margin-left: 10px;
text-align: center;
width: 400px;
height: 50px;
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
top:110px;
left:34%;

:hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
    color: #ffffff;
}
`
