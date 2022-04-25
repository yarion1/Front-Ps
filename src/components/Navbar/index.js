import React from "react";
import styled, {
  Navbar,
  Searchform,
  IconCart,
  Titlecart,
  Iconuser,
} from "../../assets/styles/Navbar/stylednavbar";
import { Input } from "reactstrap";

const NavbarPage = () => {
  return (
    <>
      <div>
        <Navbar style={{ alignItems: "center", justifyContent: "right" }}>
          <div>
            <Searchform style={{ display: "flex", flexDirection: "row" }}>
              <Input
                style={{ width: "80%", marginRight: "-10%" }}
                name="search"
                placeholder="Pesquisar produtos..."
                type="search"
              />
            </Searchform>
            <div
              style={{
                color: "#fff",
                fontSize: "50px",
                alignItems: "center",
                marginLeft: "-1100px",
                marginTop: "-50px",
                display: "flex",
              }}
            >
              Useit
              <div
            
              >
                <ul  style={{ display: "flex", margin: "3rem", marginTop: "65px" }}>

                  <Titlecart><li style={{ listStyle: "none", fontSize:"20px" }}>Meus Alugueis</li></Titlecart>
                  <Titlecart><li style={{ listStyle: "none", fontSize:"20px" }}>Ofertas</li></Titlecart>
                  <Titlecart><li style={{ listStyle: "none", fontSize:"20px" }}>Parceiros</li></Titlecart>
                  <Titlecart><li style={{ listStyle: "none", fontSize:"20px" }}>Perfil</li></Titlecart>
                </ul>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarPage;