import React from "react";
import styled, {
  Navbar,
  Searchform,
  NavItems,
  IconCart,
  Titlecart,
  Logo,
  Iconuser,
} from "../../assets/styles/Navbar/stylednavbar";
import { Input } from "reactstrap";
import logo from "../../assets/img/logo-useit.png";

const NavbarPage = () => {
  return (
    <>
      <Navbar>
        {/*{<Logo src={logo} /> }*/}
        <div>
          <img style={{width:"75%", height:"30%"}} src="https://media.discordapp.net/attachments/950791198757511191/969205599336292352/untitled-removebg-preview.png"/>
        </div>
        <NavItems>
          
          <Titlecart>
            <li style={{ listStyle: "none", fontSize: "20px" }}>
              Meus Alugueis
            </li>
          </Titlecart>
          <Titlecart>
            <li style={{ listStyle: "none", fontSize: "20px" }}>Ofertas</li>
          </Titlecart>
          <Titlecart>
            <li style={{ listStyle: "none", fontSize: "20px" }}>Parceiros</li>
          </Titlecart>
          <Titlecart>
            <li style={{ listStyle: "none", fontSize: "20px" }}>Perfil</li>
          </Titlecart>
        </NavItems>
        <Searchform
          style={{ display: "flex", flexDirection: "row", width: "30%" }}
        >
          <Input
            style={{ width: "80%", marginRight: "5%" }}
            name="search"
            placeholder="Pesquisar produtos..."
            type="search"
          />
        </Searchform>
      </Navbar>
    </>
  );
};

export default NavbarPage;
