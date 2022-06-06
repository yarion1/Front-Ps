import styled from 'styled-components';
import '../../assets/styles/fonts/index.css';


export const Fundo = styled.div `
    width: 100%;
    background: #FFF ;
    padding-top: 128px;
`

export const Userprofilecontainer = styled.div `
    width: 78%;
    max-width: 1030px;
    margin-botton: 2%;
    height: 82vh;
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
    background: #56456B;
    background-size: cover; 
    margin: 8% auto;
`

export const Center = styled.div`
    display: block;
    text-align: center;
`
export const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:100%
`
export const Frag = styled.div`
    width:40%;
    text-align:left;
    margin: 5%;
`

export const ItemName = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFF;
    padding-left: 5%;
    background: #2D1F3F;
    margin-top: 25px;
    margin-bottom: -1px;
    border-radius:5px 5px 0 0;
`
export const ItemNameDesc = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    width:150%;
    font-size: 18px;
    line-height: 21px;
    margin-left:-98px;
    margin-bottom: -1px;
    color: #FFF;
    padding-left: 5%;
    background: #2D1F3F;
    margin-top: 25px;
    border-radius:5px 5px 0 0;
`

export const UserName = styled.input`
    border:none;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    background: #56456B;
    color: rgba(255, 255, 255, 0.5);
    height:28px;
`
export const UserAge = styled.input`
    border:none;
    border-radius: 5px;
    height: 32px;
    background: #56456B;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    color: rgba(255, 255, 255, 0.5);
    
`
export const UserSelects = styled.select`
    border:none;
    border-radius: 5px;
    background: #EEEEEE;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    height: 30px;
    background: #56456B;
    color: rgba(255, 255, 255, 0.5);
`
export const UserMail = styled.input`
    border:none;
    border-radius: 5px;
    background: #56456B;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    color: rgba(255, 255, 255, 0.5);
`
export const UserProf = styled.input`
    border:none;
    border-radius: 5px;
    background: #56456B;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    color: rgba(255, 255, 255, 0.5);
`
export const UserPhone = styled.input`
    border:none;
    border-radius: 5px;
    background: #56456B;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    width:100%;
    color: rgba(255, 255, 255, 0.5);
`
export const UserDesc = styled.textarea`
    border:none;
    border-radius: 5px;
    width: 150%;
    border-radius: 0 0 5px 5px;
    padding-left: 5%;
    height: 14vh;
    min-height: 14vh;
    margin-left:-98px;
    background: #56456B;
    color: rgba(255, 255, 255, 0.5);
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

export const BotaoSenha = styled.button `
    background: #2D1F3F;
    border-radius: 10px;
    width: 180px;
    height: 44px;
    font-size: 24px;
    font-family: 'Roboto';
    font-style: normal;
    color: #ffffff;
    border: none;
    cursor: pointer;
    margin-top: 12px;

    :hover {
        transition: all ease 0.3s;
        transform: scale(1.1);
        background: #618DCE;
        border:none;
    }
`


export const Botao_editar_perfil = styled.button `
    background: #2D1F3F;
    border-radius: 10px;
    width: 95px;
    height: 40px;
    font-size: 24px;
    font-family: 'Roboto';
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
        background: #618DCE;
        border:none;
        color: #fff;
    }
`
