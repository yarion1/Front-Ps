import styled from "styled-components";

const media = {
  mobile:'@media(max-width: 768px)'

}

  export const Container = styled.div `
    max-width: 80%;
    margin: 0 auto;
    display: block;
    padding-top: 98px;
  

    ${media.mobile}{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
    }
 `;
  export const Input = styled.input`
      width: 100%;
      height: 35px;
      background: rgba(219, 215, 215, 0.63);
      border-radius: 4px;   
      margin-top: 2%;
      border: none;

      ${media.mobile}{
        width: 80%;
        height: 35px;         
        background: rgba(219, 215, 215, 0.63);
        border-radius: 4px;    
        margin: 35px;
        border: none;
      }
    `;

  export const Post = styled.p`
      width: 100%;
      margin: 0.8%;
      float: left;

      ${media.mobile}{
        width: 80%;
        justify-content: center;  
        float: left;
        display: block;
        margin-bottom: 10%;
        border: 0.1rem solid #000000;
        border-radius: 2%;
      }
    `;

  export const Capa = styled.img`
      Width: 194px;
      Height: 136px;
      border: 1px solid black;
      border-radius: 12px;
      float: left;
      margin: 0.8%;

      ${media.mobile}{
        Width: 98%;
        Height: 100%;
        Top: 243px;
        Left: 59px;
        border: 1px solid black;
        border-radius: 12px;
        margin-right: 59px ;
        justify-content: center;
      }
      `;

  export const Titulo = styled.strong`
      width: 50%;
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      text-align: left;
      margin-top: 1.2%;
      color: #000000;
      float: left;

      ${media.mobile}{
        width: 72%;    
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        text-align: left; 
        margin: 1.2%;
        display: block;
        float: left;    
        color: #000000;
      }
      `;

  export const Preco = styled.strong`
      width: 15%;
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      padding-right: 2%;
      margin: 1.8%;
      text-align: right;
      float: right;
      color: #000000;

      ${media.mobile}{
        width: 20%;   
        font-family: 'Nunito Sans';
        font-style: normal;
        text-align: right;
        margin: 1.2%;
        float: right;    
        color: #000000;
      }
      `;

  export const Subtitulo = styled.p`
      width: 64%;
      font-family: 'Nunito Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      color: #858585;
      float: left;    
      
      ${media.mobile}{
        width: 100%;
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
        text-align: left;        
        color: #858585;
        float: left;
      }
      `;