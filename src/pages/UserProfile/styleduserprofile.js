import styled from "styled-components";
import "../../assets/styles/fonts/index.css";

export const Fundo = styled.div `
    width: 100%;
    background: #FFF ;
    padding-top: 128px;
`
export const Userprofilecontainer = styled.div `
    width: 78%;
    max-width: 1030px;
    margin-botton: 2%;
    height: 768px;
    margin: 0 auto;
    background: #EEEEEE;
    border-radius: 10px;
    border: border: 1px solid rgba(0, 0, 0, 0.20);
    text-align: left;
    padding: 5%;
    display: block;
`
export const Userpic = styled.img `
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: #fff;
    background-size: cover; 
    margin: 8% auto;
`
export const Center = styled.div`
  display: block;
  text-align: center;
`;
export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const Frag = styled.div`
  width: 40%;
  text-align: left;
  margin: 5%;
`;
export const ItemName = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #fff;
  padding-left: 5%;
  background: #2d1f3f;
  margin-top: 25px;
  margin-bottom: -1px;
  border-radius: 5px 5px 0 0;
`;
export const ItemNameDesc = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  width: 100%;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: -1px;
  color: #fff;
  padding-left: 5%;
  background: #2d1f3f;
  margin-top: 25px;
  border-radius: 5px 5px 0 0;
`;

export const UserName = styled.input`
    border:none;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    background: #fff;
    color: black;
    height: 28px;
`
export const UserAge = styled.input`
    border:none;
    border-radius: 5px;
    height: 32px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width: 100%;
    color: black;
    
`
export const UserSelects = styled.select`
    border:none;
    border-radius: 5px;
    background: #EEEEEE;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width: 100%;
    height: 30px;
    background: #fff;
    color: black;
`
export const UserMail = styled.input`
    border: none;
    border-radius: 5px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    color: black;
`
export const UserProf = styled.input`
    border: none;
    border-radius: 5px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width: 100%;
    color: black;
`
export const UserPhone = styled.input`
    border: none;
    border-radius: 5px;
    background: #fff;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width: 100%;
    color: black;
`
export const UserDesc = styled.textarea`
    border:none;
    border-radius: 5px;
    width: 100%;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    height: 14vh;
    min-height: 14vh;
    background: #fff;
    color: black;
`
export const DadosWork = styled.button `
    background: none;
    border: none;
    cursor: pointer;
    color: #2D1F3F;
    text-decoration: underline;
    text-align: right;
    margin: 10px;
    font-family: Roboto;
    font-weight: bold;  
`;

export const BotaoSenha = styled.button`
  background: #2d1f3f;
  border-radius: 10px;
  width: 80%;
  font-size: 24px;
  font-family: "Roboto";
  font-style: normal;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 12px;

  :hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
    background: #618dce;
    border: none;
  }
`;
export const Botao_editar_perfil = styled.button`
  background: #2d1f3f;
  border-radius: 10px;
  width: 95px;
  height: 40px;
  font-size: 24px;
  font-family: "Roboto";
  font-style: normal;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin: 5%;
  float: right;

  :hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
    color: #ffffff;
    background: #618dce;
    border: none;
    color: #fff;
  }
`;
