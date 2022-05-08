import styled from "styled-components";
import { Form } from "reactstrap";
import "../fonts/index.css";

export const Navbar = styled.nav`
  display: flex;
  position: sticky;
  z-index: 100;
  background: #2166c1;
  height: 90px;
  width: 100%;
  padding-left: 5%;
  align-items: center;
  justify-items: space-evenly;
  color: white;
  fontSize: "50px",
  alignItems: "center",
`;


export const Searchform = styled(Form)`
  display: flex;
  position: relative;
  width: 30%;
  height: 40px;
`;

export const Titlecart = styled.h2`
  color: #fff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: 25px;
  z-index: 10;
  background-color: #2166c1;
  margin-top: 10px;
  padding-left: 5px;
  margin-left: 5px;
  text-align: center;
  width: 185px;
  height: 30px;
  color: #ffffff;
  border-bottom: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  cursor: pointer;
  overflow: hidden;

  :hover {
    transition: all ease 0.3s;
    transform: scale(1.1);
  }
`;

export const NavItems = styled.ul`
  padding-top: 15px;
  width: 60%;
  display: flex;
  flex-direction: row;
  alig-items: center;
  justify-items: space-evenly;
  color: "white;
  alignItems: "center";
`;

export const Logo = styled.img`
  max-heigth: 5px;
  min-width:5px;
  heigth:auto;
  width:auto;
`;
