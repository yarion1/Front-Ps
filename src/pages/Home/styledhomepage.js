import styled from "styled-components";
import {Card, CardGroup} from 'reactstrap';

export const Page = styled.body `
  padding:2%;
  
`;

export const Textcategoria = styled.h5 `
    position: absolute;
    top:10px;
    font-style: normal;
    font-weight: bold;
    font-size: 3vh;
    line-height: 50px;
    color: #fff;
    padding-top: 55%;
    text-align: left;
    padding-left:15px;

    @media (max-width: 768px) {
      font-size: 4vh;
    }
    `;

export const Cardcategory = styled(Card) `
  display: inline-block;
  width: 25%;
  margin-top: 10%;
  text-align: center;
  cursor: pointer;
  transform: scale(0.9);
  transition: all ease 0.5s;
  overflow: hidden;
  opacity: 0.2 solid black;
  border-color: black;
  
  :hover{
    transform: scale(1.05);
    transition: all ease 0.3s;
  }
  
  @media (max-width: 768px) {
    width: 50%;
  }
  
`;

export const Cortediv = styled.div `
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  border-bottom: 260px solid #618DC1B8 ;
  border-left: 0px solid transparent;
  border-right: 200px solid transparent;
  width: 350px;
   
`;

export const CardRowleft = styled.div `
    position: absolute;
    width: 40px;
    height: 200px;
    background-color: #8B8B8B;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    left:0;
    margin-top: 250px;

    :hover{
      opacity: 1;
    }


`;

export const CardRowright = styled.div `
    position: absolute;
    width: 40px;
    height: 200px;
    background-color: #8B8B8B;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
    right: 0;
    margin-top: 250px;

    :hover{
      opacity: 1;
    }


`;

export const Infopromo = styled.div `
  
`;



/*background: #120F33B8;
width: 65%;
opacity: 0.85;
left:0;
bottom: -4em;
height: 20em;
position: absolute;
transform: scale(1.2);
transition: all ease 0.5s;
border:none;
*/