import React from "react";
import {
  Box,
  Logo,
  Menu,
  Item,
  Login,
} from "../../assets/styles/Navbar/StyledNavbarLanding";
import UseitLogo from "../../assets/img/UseitLogo.svg";
import SidebarNav from "../../components/Sidebar/SidebarNav";

const NavbarPage = () => {
  return (
    <>
      <Box>
        <Logo>
          <a href="/inicio">
            <img src={UseitLogo} alt="" />
          </a>
        </Logo>
        <SidebarNav />
        <Menu>
          <Item>
            <a href="/Serviços">Serviços</a>
          </Item>
          <Item>
            <a href="/sobrenos">Sobre nós</a>
          </Item>
          <Item>
            <a href="/contatos">Contatos</a>
          </Item>
        </Menu>
        <Login>Entrar</Login>
      </Box>
    </>
  );
};

export default NavbarPage;
