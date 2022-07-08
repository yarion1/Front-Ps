import React from "react";
import {
  Body,
  Container,
  Main,
  PageContainer,
  Button,
  ColumnImage,
  Floatingdiv,
  Valuediv,
} from "./StyledLandingPage";
import Navbar from "../../components/Navbar/navLanding";
import CivilImage from "../../assets/img/civil.png";
import { FcInTransit } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <>
      <Body>
        <Container>
          <Navbar />
          <Main>
            <PageContainer>
              <div>
                <h1>
                  Anuncie, alugue equipamentos e ferramentas para o seu negócio
                </h1>
                <h6>De um jeito fácil e prático para você.</h6>
                <Button onClick={handleClick}>Começar agora</Button>
              </div>
              <div>
                <Floatingdiv style={{ top: "43rem" }}>
                  <FcInTransit />
                  <Valuediv>
                    <h7>
                      Rápido e <br />
                      Seguro
                    </h7>
                  </Valuediv>
                </Floatingdiv>
                <ColumnImage>
                  <img src={CivilImage} alt="Um homem fazendo pesquisa" />
                </ColumnImage>
              </div>
            </PageContainer>
          </Main>
        </Container>
      </Body>
    </>
  );
}

export default LandingPage;
