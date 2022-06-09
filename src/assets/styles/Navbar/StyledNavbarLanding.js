import styled from "styled-components";

export const Box = styled.header `
    padding-top: 30px;
    heigth: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
  max-heigth: 5px;
  min-width:5px;
  heigth:auto;
  width:auto;
  margin-left: 12px;
  padding-bottom: 14px;

  img{
    width:110px;
    heigth:auto;
  }
`;

export const Menu =  styled.ul `
    margin-left:auto;

    @media(max-width: 929px ){
        display:none;
    }
`;

export const Item =  styled.li `
    a{
        color: #130A1D;
        transition: all ease 0.2s;
    }
    a:hover{
        color: #2166C1;
    }
    display: inline-block;
    margin-right: 60px;
    font-size: 18px;
    font-weight: 500;

`;

export const Login = styled.button `
  padding-bottom: 20px;
  background:none;
  transition: all ease 0.5s;
  color: #130A1D;
  font-size: 18px;
  font-weight: 500;
  margin-left:auto;
   :hover{
        color: #2166C1;
   }
   @media(max-width: 929px ){
    display:none;
   }
`;

export const Logout = styled.button `
  padding-bottom: 20px;
  background:none;
  transition: all ease 0.5s;
  color: #130A1D;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  margin-left:auto;
   :hover{
        color: #2166C1;
   }
   @media(max-width: 929px ){
    display:none;
   }
`;