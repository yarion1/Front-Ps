import styled from 'styled-components';

export const DivLogin = styled.div `
   width: 15%;
   margin-left: 53%;
   position: absolute;
   display: flex;
   flex-diretion: column;
   margin-top:38rem;
   
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
     margin-top:34rem;
   }
   @media(max-width: 950px){
      top: 7em;
      width: 25%;
      right: 35%;

      h2{
        margin-top: 40px;
      }
    }
  
    @media(max-width: 600px){
      top: 5em;
      width: 35%;
      right: 32%;
 
    }
 
 `;
