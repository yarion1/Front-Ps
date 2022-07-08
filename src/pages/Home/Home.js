import React from "react";
import {
  Textcategoria,
  Cardcategory,
  Cortediv,
  Page,
  CardSignUp,
  CardRent,
  CardProfile,
  Gambi,
  Gamb,
  Gambi2,
  Gambi3,
  CardButtons,
  Textmid,
} from "./styledhomepage";

import { CardImg, CardImgOverlay } from "reactstrap";

import Navbar from "../../components/Navbar";
import DemoCarousel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";

function Home() {
  const cards = [
    {
      id: "1",
      title: "Escavadeiras",
      images: [
        "https://cdn.discordapp.com/attachments/931699948087574538/984492129525055518/pexels-anamul-rezwan-1078884.jpg",
      ],
    },

    {
      id: "2",
      title: "Furadeiras",
      images: [
        "https://cdn.discordapp.com/attachments/931699948087574538/984492220226875423/pexels-bidvine-1249611.jpg",
      ],
    },

    {
      id: "3",
      title: "Máquinas de costura",
      images: [
        "https://cdn.discordapp.com/attachments/931699948087574538/984492283971911690/pexels-leticia-ribeiro-2249290.jpg",
      ],
    },

    {
      id: "4",
      title: "Ferramentas",
      images: [
        "https://cdn.discordapp.com/attachments/931699948087574538/984492202392694814/pexels-pixabay-162553.jpg",
      ],
    },
  ];
  return (
    <>
      <Navbar />
      <Page>
        <Gambi3></Gambi3>
        <DemoCarousel />

        <CardSignUp>
          <Gambi2></Gambi2>
          <CardImg
            alt="Card image cap"
            src="https://cdn.discordapp.com/attachments/931699948087574538/984496160976810014/signup_1.png"
            style={{ height: "90px", width: "90px" }}
          />
          <Gambi></Gambi>
          <Textcategoria>
            Cadastre-se e tenha acesso a todos os recursos da plataforma.
          </Textcategoria>
          <Gamb></Gamb>
          <CardButtons>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              Realizar Cadastro
            </Link>
          </CardButtons>
        </CardSignUp>
        <CardRent>
          <Gambi2></Gambi2>
          <CardImg
            alt="Card image cap"
            src="https://cdn.discordapp.com/attachments/931699948087574538/984495692120719360/assembly_1.png"
            style={{ height: "90px", width: "90px" }}
          />
          <Gambi></Gambi>
          <Textcategoria>
            Alugue a máquina ideal para realizar suas atividades.
          </Textcategoria>
          <Gamb></Gamb>
          <CardButtons>
            <Link
              to="/Rent"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              Alugar máquina
            </Link>
          </CardButtons>
        </CardRent>
        <CardProfile>
          <Gambi2></Gambi2>
          <CardImg
            alt="Card image cap"
            src="https://cdn.discordapp.com/attachments/931699948087574538/984496035051237436/user_1.png"
            style={{ height: "90px", width: "90px" }}
          />
          <Gambi></Gambi>
          <Textcategoria>
            Atualize seu perfil para que todos possam conhecê-lo.
          </Textcategoria>
          <Gamb></Gamb>
          <CardButtons>
            <Link
              to="/User_profile"
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "#fff",
              }}
            >
              Acessar meu perfil
            </Link>
          </CardButtons>
        </CardProfile>
        <Textmid>Escolha a máquina ideal para você!</Textmid>
        {cards.map((item, index) => (
          <Cardcategory key={index} inverse>
            <div>
              <CardImg
                alt="Card image cap"
                width="100%"
                src={item.images}
                style={{ height: "250px" }}
              />
              <CardImgOverlay>
                <Cortediv></Cortediv>
                <Textcategoria tag="h5">{item.title}</Textcategoria>
              </CardImgOverlay>
            </div>
          </Cardcategory>
        ))}
      </Page>
    </>
  );
}

export default Home;
