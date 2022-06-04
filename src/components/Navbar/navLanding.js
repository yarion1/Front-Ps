import React, {memo, useState} from "react";
import styled, {
   Body,
   Box,
   Logo,
   Menu,
   Item,
   Logout,
   
} from "../../assets/styles/Navbar/StyledNavbarLanding";
import { Link } from "react-router-dom";
import UseitLogo  from "../../assets/img/UseitLogo.svg";
import SidebarNav from '../../components/Sidebar/SidebarNav';

const NavbarPage = () => {

  return (
    <>
      <Box>
        <Logo>
            <a href="/">
                <img src={UseitLogo}
                />
            </a>
         </Logo>
         <SidebarNav/>
          <Menu>
              <Item><a href="/home">Home</a></Item>
              <Item><a href="/Serviços">Serviços</a></Item>
              <Item><a href="/sobrenos">Sobre nós</a></Item>
              <Item><a href="/contatos">Contatos</a></Item>
          </Menu>
            <Logout>Sair</Logout>
      </Box>
    </>
  );
};

export default NavbarPage;
