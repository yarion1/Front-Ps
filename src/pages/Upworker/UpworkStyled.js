import styled from 'styled-components';

export const DivLogin = styled.div `
   width: 165%;
   margin-left: 20%;
   position: absolute;
   display: flex;
   flex-diretion: column;
   top: 22em;
   
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

   @media(max-width: 1400px){
      top: 20em;
      margin-left: 30%;
   }
   @media(max-width: 950px){
      top: 10em;
      right: -55%;

      h2{
        margin-top: 40px;
      }
    }
    @media(max-width: 630px){
      top: 22em;
      left: -80%;
      width: 175%;
    }
    @media(max-width: 600px){
      top: 24em;
      left: -87%;
      width: 100%;
    }
    
 `;
