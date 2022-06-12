import styled from 'styled-components';
import '../../../assets/styles/fonts/index.css';
import { Card, CardBody } from 'reactstrap';
import {GoVerified} from 'react-icons/go';

export const Divpage = styled.div `
    position: relative;
    margin: 0 auto;
    padding-left:20%;
    display: flex;
    flex-direction: row;
    height: 75vh;
    top: 5em;
    left:0;
    right:0;

    @media(max-width: 960px){
        flex-direction: column;
    }
    @media(max-height: 610px){
        height: 90vh;
    }
`;

export const Carditens = styled(Card) `
    box-sizing: border-box;
    border-radius: 10px;
    margin-right: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background-color: rgb(255, 255, 255);
    width: 50%;

    @media(max-width: 960px){
        width: 85%;
    }

    li{
        display: inline-block;
        margin-right: 35px;

    }

`;

export const DivImage = styled.div`
    
    -webkit-box-align: center;
    align-items: center;
    padding-top:10px;
    padding-left:5px;
    -webkit-box-pack: center;
    justify-content: center;
    width: 75px;
    height: 66px;
    position: relative;
    cursor: pointer;
    border-radius: 3px;
    margin-right: 10px;
    border: 1px solid rgb(204, 204, 204);
    &.selected {
        border: 1px solid #080436;
    }
    img{
        object-fit: contain;
    }

`;

export const Divcoluna = styled.div `
    display: flex;
    padding-left: 5%;
    flex-grow: 3;
    margin-top: 2vh;
    height: 10vh;
    -webkit-box-align: center;
    align-items: center;
    width: 50vh;

    @media(max-width: 605px){
        display:none;
    }
    
`;

export const Iitleitem = styled(CardBody) `
    font-family: 'Nunito Sans';
    font-style: normal;
    font-size: 2.2vw;
    overflow: hidden;
    line-height: 34px;
    padding-left: 21px;
    flex: 0 0 auto;
    color: #000000;
`;

export const Carddetails =  styled(Card) `
    display: flex;
    position: relative;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background-color: rgb(255, 255, 255);
    width: 30%;

    @media(max-width: 960px){
        width: 85%;

    }
    
`;

export const Infopreco =  styled.div `
    position: relative;
    display:flex;
    width: 52%;
    height: 12%;
    top: 1rem;
    border-radius: 0px 50px 50px 0px;
    background: #2166c1;
    text-align: center;
    padding-left: 0.5em;

    @media(max-width: 960px){
        width: 20%;
        height: 15%;
    }

`;

export const Preco =  styled.h2 `
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.8vw;
    text-align: center;
    padding-top: 1rem;
    color: #FFFFFF;
    overflow: auto;
`;

export const Meiospag = styled.button `
    position: relative;
    display:flex;
    width: 200px;
    height: 39px;
    left: 25px;
    top: 1.9rem;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-size: 1vw;
    line-height: 19px;
    text-align: center;
    color: #3483FA;
    border: none;
    background: none;
    text-decoration: underline;
    transition: 0.2s;
    
     :hover{
            color: #52AFCC;
        }
    }
`;

export const CardAviso = styled(Card) `
    position: relative;
    max-width: 80%;
    height: 25%;
    margin-top: 2.5rem;
    left: 2em;
    right: 0;
    background: rgba(196, 196, 196, 0.07);
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    border-radius: 7px;

 
    @media(max-width: 950px){
        max-width:60%;
        height: 35%;
        left:22vw;
        top: -4.5rem;
    }

 
`;

export const Text =  styled.h2 `
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 3vh;
    line-height: 21px;
    padding-left: 80px;
    padding-top: 15px;
    color: #050505;

    @media(max-height: 610px){
        font-size: 2vh;
        padding-left: 7em;
    }
`;

export const Text2 = styled(Text) `
    font-size: 2vh;
    padding-top: 10px;
    color: rgba(5, 5, 5, 0.61);
    h2{
         line-height: 14px;
    }
    @media(max-height: 610px){
        font-size: 0.8vw;
        padding-top: 1px;
    }
`;


export const Iconverified = styled(GoVerified) `
    position: absolute;
    color: #56AC21;
    width: 80px;
    height: 50px;
    top: 50px;
`;

export const Buttonconfirm = styled.button `
    position: relative;
    width: 50%;
    height: 9%;
    left: 20%;
    top: 2rem;
    bottom: 25px;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-size: 1.3vw;
    border: none;
    border-color: #2166c1;
    background: #2166c1;
    border-radius: 10px;
    -webkit-transition: 0.3s;
    transition: 0.3s;

    :hover{
        background: #618DCE;
        border:none;
        color: #fff;
    }

    @media(max-width: 980px){
        width: 55%;
        height: 25%;
        top: -1rem;
        font-size:2.3vw;
    }
`;

export const Imagemprincipal = styled.div `
    max-width: 95%;
    height: 100%;
    margin-left: 5%;
    margin-top: 8%;
    overflow: auto;
    cursor: zoom-in;
    object-fit: fill;
    &img {
        :hover {
          scale(1.25);
          transition: all 0.3s ease;
      }
    }
    @media(max-width: 980px){
       max-width: 80%;
       overflow: auto;
       margin-top: 20%;
       margin-left: 10%;
       margin-top: 6%;

       img{
           max-width: 90%;
           max-height: 250px;
       }
    }
    
`;

export const Avalie = styled.button `
    position: relative;
    background: none;
    border: none;
    cursor: pointer;
    color: blue;
    text-decoration: underline;
    top: 2.5em;
    font-size: 1.2vw;

    @media(max-width: 950px){
        top: -1em;
    }
    
`;

export const H1 = styled.h1 `
    font-size:18px;
    
    @media(max-width: 915px){
        display:none;
    }

`;
export const DivInfo = styled.div `

    position: relative;
    margin-left:20%;
    height: 20vh;
    width: 70%;
    top:65vh;

`;