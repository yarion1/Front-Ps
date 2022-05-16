import styled from 'styled-components';
import '../../../assets/styles/fonts/index.css';
import { Card, CardBody } from 'reactstrap';
import {GoVerified} from 'react-icons/go';


export const Globalpage = styled.body `
    margin: 0 auto;
    width: 70vw;
    height: 60vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Carditens = styled(Card) `
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 680px;
    top: 60px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background-color: rgb(255, 255, 255);
    flex: 1 1 0px;
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
    padding-left: 50px;
    margin-top: 10px;
    height: 100px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const Iitleitem = styled(CardBody) `
    font-family: 'Nunito Sans';
    font-style: normal;
    font-size: 25px;
    line-height: 34px;
    padding-left: 21px;
    color: #000000;
`;

export const Carddetails =  styled(Card) `
    position: absolute;
    width: 42%;
    top: 20px;
    height: 638px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
`;

export const Infopreco =  styled.div `
    position: absolute;
    width: 52%;
    max-height: 61px;
    top: 125px;
    border-radius: 0px 50px 50px 0px;
    background: #2166c1;
    text-align: center;
`;

export const Preco =  styled.h2 `
    font-family: 'Nunito Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    padding-top: 5px;
    color: #FFFFFF;
`;

export const Meiospag = styled.button `
    position: absolute;
    width: 200px;
    height: 39px;
    left: 15px;
    top: 215px;
    font-family: 'Nunito Sans';
    font-style: normal;
    font-size: 14px;
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
    width: 319px;
    height: 150px;
    margin-bottom: 150px;
    left: 40px;
    background: rgba(196, 196, 196, 0.07);
    border: 1px solid rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    border-radius: 7px;
`;

export const Text =  styled.h2 `
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    padding-left: 80px;
    padding-top: 15px;
    color: #050505;
`;

export const Text2 = styled(Text) `
    font-size: 14px;
    line-height: 16px;
    padding-top: 10px;
    color: rgba(5, 5, 5, 0.61);
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
    width: 75%;
    height: 66px;
    left: 14%;
    bottom: 55px;
    color: #FFFFFF;
    font-family: 'Roboto';
    font-size: 20px;
    border:none;
    border-color: #2166c1;
    background: #2166c1;
    border-radius: 10px;
    transition: 0.3s;

    :hover{
        background: #618DCE;
        border:none;
        color: #fff;
    }
`;

export const Imagemprincipal = styled.div `
    width: 400px;
    margin-left: 40px;
    margin-top: 50px;
    overflow: 'hidden';
    cursor: zoom-in;
    &img {
        :hover {
          scale(1.25);
          transition: all 0.3s ease;
      }
    }
`;