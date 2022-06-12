import React from 'react';
import styled from 'styled-components';
import {Form, Input, Button, Label, FormGroup} from 'reactstrap';
import '../fonts/index.css';

export const Globalpage = styled.body `
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    background: #FAF8FF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


    @media(max-width: 600px){
      background: #130A1D;
    }
`;
export const Cardpage = styled.div `
        width: 80%;
        height: 85%;
        background: #fff;
        background: #130A1D;
        box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.35);
        border-radius: 60px;
        display: flex;
        flex-direction: column;

        @media(max-height: 700px){
          height: 95%;
        }
        @media(max-width: 600px){
          background: #130A1D;
          border-radius: none;
          box-shadow: none;
        }
`;
export const Cardlogin = styled.div `    
    width: 35%;
    height: 70%;
    position: relative;
    display: flex;
    left: 58%;
    top: 22%;
    background: #2D1F3F;
    border-radius: 30px;
    text-align: center;
    justify-content:center;
    
    @media(min-width: 1400px){
      width: 45%;
      left: 49%;
   }
    @media(max-width: 1400px){
      width: 45%;
      left: 50%;
    }
    @media(max-width: 950px){
      background: #130A1D;
      border:none;
      margin:0;
      left:0;
      margin: 0 auto;
    }

    @media(max-height: 700px){
      top: 17%;
      height: 75%;
    }
    @media(max-width: 600px){
      background: #2D1F3F;
      width: 100%;
      height: 57%;
    }
   
`;
export const Imageconstructor = styled.div `
    display: flex;
    margin-left: 7%;
    width: 40%;
    position: absolute;

    img{
        margin-top: 230px;
        width: 69%;
        object-fit: contain;
    }
    @media(max-width: 950px){
      img{
        display:none;
      }
    }

    @media(max-height: 700px){
      img{
        margin-top: 180px;
      }
    }

`;

export const Textinfo = styled.div `
    position: absolute;
    width: 25%;
    height: 88px;
    left: 18%;
    top: 15%;

  h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 2.1vw;
  }

    color: #FFFFFF;
    @media(max-width: 950px){
        display:none;
    }
    
    @media(max-height: 700px){
      top: 10%;
    }

`;


export const Titlelog = styled.h2 `
    color: #FFFFFF;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    padding-top: 50px;

    @media(max-width: 1400px){
      font-size: 30px;
      padding-top: 20px;
    }
`;

export const Imagelogo = styled.div `
  position: absolute;
  top: 8%;
  left: 64%;
   img{  
        width: 38%;
        object-fit: contain;
   }

   @media(min-width: 1400px){
    left:60%;
  }
   @media(max-width: 1400px){
    left:63%;
    top: 9%;
    
    img{
     width: 25%;
     heigth: 10px;
    }
  }

   @media(max-width: 950px){
     left: 38%;
     img{
      width: 35%;
      heigth: 10px;
     }
   }
   @media(max-height: 700px){
    top: 5%;
  }
`;

export const Formlog = styled(Form) `
      position: absolute;
      top: 11em;
      right: 50%;
      height: 50%;

      @media(min-width: 1400px){
        top: 7em;
      }
      @media(max-width: 1400px){
        top: 6em;
      }

      @media(max-width: 950px){
        top: 20%;
        left: 10%;
        width: 80%;
    }
    
    @media(max-width: 600px){
      left: 50%;
      width: 60%;
    }
`;
export const Labelog = styled(Label) `
    color: rgba(255, 255, 255, 0.5);
    font-size: 17px;
    line-height: 20px;

    @media(max-width: 600px){
      margin-left: 5px;
    }

`;
export const Buttonlog = styled(Button) `
      left: 0%;
      right: 0%;
      margin-top: 24%;
      background: #2166C1;
      border-radius: 10px;
      position: absolute;
      transform: scale(1);
      width: 200%;

    hover{
      transition: all ease 0.3s;
      transform: scale(0.9);
    }
    
    @media(max-width: 1400px){
         top: 85%;
         margin-top: 15%;
    }

    @media(max-width: 950px){
         width: 100%;
         left: 40%;
    }

    @media(max-width: 600px){
      width: 70%;
      left: 10%;
 }
`;

export const Inputlog = styled(Input) `
    background: #56456B;
    border-top: #56456B;
    border-right: #56456B;
    border-left: #56456B;
    padding-bottom: 2px;
    margin-bottom: 10px;
    border-bottom: #56456B;
    font-size: 15px;
    width: 200%;
    padding-left: 20px;
    border-radius: 0;


    @media(max-width: 950px){
      width: 200%;
    }
    @media(max-width: 600px){
      width: 100%;
      left: 70%;
    }

`;
 export const FormGrouplog = styled(FormGroup) `
 
    @media(max-width: 950px){
      right: 50%;
      }
     
      
 
 `;

 export const Divbutton = styled.div `
    @media(max-width: 950px){
        right:40%;
        width: 110%;
        position: absolute;
    }
 
 `;

 export const H3 = styled.h3 `
   position: relative;
    right: 35%;
    font-family: 'Arial';
    font-size: 18px;
    
    color: #FFFFFF;

    @media(max-width: 950px){
      margin-right: 0;
      left: -65%;
      margin-left: 0;
    }
    @media(max-width: 600px){
      margin-left: -11%;
    }
 
 `;

 export const DivBtn = styled.div `
    position: relative;
    margin-left: 100%;
    width: 100%;
 
    button{
      border: none;
      background: transparent;
      color: #fff;
      font-family: 'Nunito Sans';
      cursor: pointer;

      :hover{
        color: #2166C1;
        transition: 0.4s;
      }
    }
    @media(max-width:950px){
      margin-left: 70%;
    }
    @media(max-width: 600px){
      margin-left: -22%;
      top: 7%;
    }
 `;

 export const Divregister = styled.div `
   width: 165%;
   margin-left: 50%;
   position: absolute;
   display: flex;
   flex-diretion: column;
   top: 20em;
   
   button{
     border: none;
     cursor: pointer;
     font-family: 'Nunito Sans';
     background: transparent;
     color: #2166C1;
     font-size: 15px;

     :hover{
       color: #fff;
       transition: 0.4s;
     }
   }
   h2{
     margin-top: 2px;
     font-size: 15px;
     color: #fff;
   }
   @media(min-width: 1400px){
       top: 22em;
       margin-left: 25%;
   }
   @media(max-width: 1400px){
      top: 19em;
      margin-left: 30%;
   }
   @media(max-width: 950px){
      top: 22em;
      right: -50%;

      h2{
        margin-top: 1px;
      }
    }
    @media(max-width: 630px){
      top: 22em;
      left: -80%;
      width: 175%;
    }
    @media(max-width: 600px){
      top: 26em;
      left: -87%;
      width: 150%;
    }
 
 `;
