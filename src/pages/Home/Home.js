import React from "react";
import style,{
    Textcategoria,
    Cardcategory,
    Cortediv,
    CardRowleft,
    CardRowright,
    Infopromo,
    Diagonalbox,
    Page,
    PrincipalCard,
    PrincipalCortediv,
    PrincipalTitlecategoria,
    PrincipalTextcategoria,
    CardSignUp,
    CardRent,
    CardProfile,
    cardfaixa,
    Gambi,  Gamb, Gambi2, Gambi3,
    CardButtons, CardButtons2, CardButtons3,
    Textmid,
    Sublinhado,
    BotaoMais,
    TextCard,

} from './styledhomepage';
import {
    CardImg,
    CardBody,
    CardImgOverlay,
} from 'reactstrap';
import {MdOutlineNavigateBefore, MdOutlineNavigateNext} from 'react-icons/md';
import Navbar from '../../components/Navbar';
import DemoCarousel from  '../../components/Carousel/Carousel';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Carousel } from 'react-carousel-minimal';
import { Link } from "react-router-dom";

function Home () {
  
  const cards = [
    {
      id: '1',
      title: 'Escavadeiras',
      images: ['https://cdn.discordapp.com/attachments/931699948087574538/984492129525055518/pexels-anamul-rezwan-1078884.jpg'],
    },

    {
    id:'2',
    title: 'Furadeiras',
    images: ['https://cdn.discordapp.com/attachments/931699948087574538/984492220226875423/pexels-bidvine-1249611.jpg'],
    },

    {
    id:'3',
    title: 'Máquinas de costura',
    images: ['https://cdn.discordapp.com/attachments/931699948087574538/984492283971911690/pexels-leticia-ribeiro-2249290.jpg'],
    },

    {
    id:'4',
    title: 'Ferramentas',
    images: ['https://cdn.discordapp.com/attachments/931699948087574538/984492202392694814/pexels-pixabay-162553.jpg'],
    },
  ];
 return(
    <>
      <Navbar/>   
      <Page>
        <Gambi3></Gambi3>
        <DemoCarousel></DemoCarousel>

        <CardSignUp>
        <Gambi2></Gambi2>
        <CardImg          
          alt="Card image cap"
          src= "https://cdn.discordapp.com/attachments/931699948087574538/984496160976810014/signup_1.png" 
          style={{height: '90px'} , {width: '90px'}}
          />
          <Gambi></Gambi>
          <Textcategoria>
          Cadastre-se e tenha acesso a todos os recursos da plataforma.
          </Textcategoria>
          <Gamb></Gamb>
          <CardButtons>
            <Link to="/login" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
             <TextCard>Realizar Cadastro</TextCard>
            </Link>
          </CardButtons>
        </CardSignUp>
        <CardRent>
        <Gambi2></Gambi2> 
        <CardImg          
          alt="Card image cap"
          src=   "https://cdn.discordapp.com/attachments/931699948087574538/984495692120719360/assembly_1.png"  
          style={{height: '90px'} , {width: '90px'}}
        />
          <Gambi></Gambi>
          <Textcategoria>
          Alugue a máquina ideal para realizar suas atividades.
          </Textcategoria>
          <Gamb></Gamb>
          <CardButtons2>
            <Link to="/Rent" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
            <TextCard> Alugar máquina</TextCard>
            </Link>
          </CardButtons2>
        </CardRent>
        <CardProfile>
        <Gambi2></Gambi2>
        <CardImg            
          alt="Card image cap"
          src=  "https://cdn.discordapp.com/attachments/931699948087574538/984496035051237436/user_1.png" 
          style={{height: '90px'} , {width: '90px'}}
        />
            <Gambi></Gambi>
            <Textcategoria>
            Atualize seu perfil para que todos possam conhecê-lo.
            </Textcategoria>
            <Gamb></Gamb>
          <CardButtons3>
            <Link to="/User_profile" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
            <TextCard>Acessar meu perfil</TextCard>
            </Link>
          </CardButtons3>
        </CardProfile>
        <Textmid>Escolha a máquina ideal para você!</Textmid>
        {cards.map((item, index) => (
        <Cardcategory inverse>
          <div 
           key={index}
          >
           <CardImg
          alt="Card image cap"
          width="100%"
          src={item.images}
          style={{height: '250px'}}
          />
          <CardImgOverlay>
            <Cortediv></Cortediv>
            <Textcategoria tag="h5">
                {item.title}
              </Textcategoria>
          </CardImgOverlay>
          </div>
        </Cardcategory>
    ))}
      </Page>  
    </>
 ); 
}

export default Home;