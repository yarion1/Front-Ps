import styled from "styled-components";
import {Card, CardGroup} from 'reactstrap';
import Bkground1 from '../../assets/img/Ellipse1.svg';
import Bkground2 from '../../assets/img/Ellipse2.svg';

export const Body = styled.body `
    background-color: #FAF8FF;
    background: url(${Bkground2}) no-repeat 670px, url(${Bkground1}) no-repeat 620px;
    background-size:cover;

    @media(max-height: 590px){
      height: auto;
    }
`;

export const Container = styled.div `

  width: 100%;
  max-width: 1110px;
  margin: auto;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  
  display: flex;
  flex-direction: column;


`;

export const Main = styled.main `
  padding-top: 200px;
  flex: 1;
  align-items: center;
  display: flex;


`;

export const PageContainer = styled.div `
 
  display: flex;
  flex-direction: row;

  > div{
    width: 50%;
  }
   
  h1{
    color: #130A1D;
    font-size: 56px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
  }

  h6{
    font-size: 16px;
    color: rgb(19,10,29, 0.7);
    font-weight: normal;
    padding-right: 150px;
    margin-top: 25px;
    font-family: 'Poppins', sans-serif;
  }

  @media(max-width: 929px){
    padding-left: 15%;
    display: flex;
    flex-direction: column;

    text-items: center;
    h1{
      font-size:40px;
      overflow: auto;
    }
    > div{
      width: 100%;
    }
  }
  @media(max-width: 560px){
    padding-left: 25%;
    h1,h6{
      font-size:14px;
      overflow: auto;
    }

  }

`;

export const Button = styled.button `
    background-color: #2166C1;
    border: 1px solid #2166C1;
    color: #FFF;
    font-size: 18x;
    font-weight: 500;
    width: 200px;
    height: 60px;
    border-radius: 60px;
    margin-top:50px;
    transition: all 0.25s ease-out;

    &:hover{
      background-color: #F0F6FF;
      color: #2166C1;
      border: 1px solid #2166C1;
    }
    @media(max-width: 929px){
        margin-left: 30%;

    }
    @media(max-width: 560px){
      width: 100px;
      height: 40px;
      font-size: 10px;
    }
`;

export const ColumnImage = styled.div`

   text-align:right;

   img{
    max-width: 100%;
    max-height: 100%;
   }

   @media(max-width: 929px ){
    display:none;
   }
`;

export const Floatingdiv = styled.div `
  justify-content: space-around;
  background: white;
  box-shadow: var(--boxShadow);
  border-radius: 17px;
  display: flex;
  align-items: center;
  padding: 0px 1px 0px 20px;
  height: 6.0rem;
  font-family: sans-serif;
  font-size: 70px;
  top: 43rem;
  width: 250px;
  position: absolute;
  
 
@media(max-width: 929px){
  display: none;
}

`;

export const Valuediv = styled.div `
   font-family: sans-serif;
   font-size: 18px;
   font-weight: 500;
   padding-right:20px;
   h7{
     
   }
`;