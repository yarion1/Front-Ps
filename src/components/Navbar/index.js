import React, {memo, useState} from "react";
import styled, {
  Navbar,
  Searchform,
  NavItems,
  Titlecart,
  Logo,
  MenuContent,
  MenuIcon,
  Input,
  Lupa,
} from "../../assets/styles/Navbar/stylednavbar";
import { Link } from "react-router-dom";
import menu from '../../assets/img/menu.svg'
import {GiMagnifyingGlass} from 'react-icons/gi'

const NavbarPage = () => {
  const [show, setShow] = useState(false)

  const toggleMenu = () =>{
    setShow(!show)
  }

  return (
    <>
      <Navbar>
        <Logo>
          <a href="/">
            <img src="https://media.discordapp.net/attachments/950791198757511191/969205599336292352/untitled-removebg-preview.png"
            width="104px"
            />
          </a>
        </Logo>

        <MenuContent>
            <MenuIcon onClick={toggleMenu} src={menu} width="36px"/>
        </MenuContent>

        <NavItems show={show}>
        <Titlecart>
            <Link to="/" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
              <li>
                Home
              </li>
            </Link>
          </Titlecart>
          <Titlecart>
            <Link to="/Rent" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
              <li>
                Meus Alugueis
              </li>
            </Link>
          </Titlecart>
          <Titlecart>
            <li style={{ listStyle: "none", fontSize: "20px" }}>Ofertas</li>
          </Titlecart>
          <Titlecart>
            <li style={{ listStyle: "none", fontSize: "20px" }}>Parceiros</li>
          </Titlecart>
          <Titlecart>
            <Link to="/User-profile" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
              <li>
                Perfil
              </li>
            </Link>
          </Titlecart>
        </NavItems>

        <Searchform>
          <Input
            name="search"
            placeholder="Pesquisar produtos..."
            type="search"
          />
          <Lupa>
            <GiMagnifyingGlass/>
          </Lupa>          
          </Searchform>
          
      </Navbar>
    </>
  );
};

export default NavbarPage;
