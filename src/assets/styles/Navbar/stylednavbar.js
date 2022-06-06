import styled from "styled-components";
import "../fonts/index.css";

export const Navbar = styled.nav`
  display: flex;
  background: #2D1F3F;
  height: 90px;
  width: 100%;
  z-index:100;
  justify-items: space-evenly;
  color: white;
  fontSize: 50px;
  position: fixed;
  padding:8px;
`;

export const Searchform = styled.div`
margin: 12px;
width: 24%;
display: flex;

@media (max-width: 768px) {
  width: 60%;
}
`;

export const Input = styled.input`
border-radius:8px 0px 0px 8px;
outline: 0;
border: none;
height: 45px;
width: 85%;
`;

export const Lupa = styled.button`
border-radius: 0px 8px 8px 0px;
outline: 0;
border: none;
height: 45px;
width: 15%;
background:#FFF;
`;


export const Titlecart = styled.h2`
  color: #fff;
  margin:2px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  text-align: center;
  width: 30%;
  height: 56px;
  cursor: pointer;
  overflow: hidden;

  :hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-top: 10%;
    width: 100%;
    height: 10%;

    :hover {
      transition: all ease 0.3s;
      transform: scale(1.3);
    }
  }
`;

export const NavItems = styled.ul`
  padding-top: 20px;
  margin-left:-25px;
  width: 68%;
  display: flex;
  flex-direction: collum;
  alig-items: center;
  justify-items: space-evenly;
  color: white;

  @media (max-width: 768px) {
    display: ${({ show }) => show ? 'block' : 'none'};
    position: fixed;
    z-index: 4;
    background: #2D1F3F;
    top: -20px;
    left: 0px;
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin-top: 14%;
    margin-left:0px;

    li {
    width: 100%;
    }

    li:hover {
    cursor: pointer;
      a {
          color: #fff;
      }
    }
}
`;

export const Logo = styled.div`
  max-heigth: 5px;
  min-width:5px;
  heigth:auto;
  width:auto;
  margin-left: 12px;
`;

export const MenuContent = styled.div`
  width: 10%;
  padding: 10px;
  background: none;
  overflow: hidden;
  height: 40px;
  margin: 12px;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const MenuIcon = styled.img`
  cursor: pointer;
`;

