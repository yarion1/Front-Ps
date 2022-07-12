import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

function Home () {

 const [ categories , setCategories] = useState(['']);

  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        if (res.data) {
          setCategories(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao listar categorias!");
      });
  }, []);


  const [idcategorie, setIdcategorie] = useState(['']);
  const navigate= useNavigate();
  const [isloading, setIsloading] = useState(false);


  const send = (value)=>{
    if(isloading ===false){
      setIsloading(true) 
       sessionStorage.setItem('categoria', value.id);
       setIsloading(false);
       navigate(`/equipamentos/${value.title}`);
       
    }  
    
  }

  
 return(
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
            <Link to="/equipamentos" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
            <TextCard> Alugar máquina</TextCard>
            </Link>
          </CardButtons>
        </CardRent>
        <CardProfile>
        <Gambi2></Gambi2>
        <CardImg            
          alt="Card image cap"
          src=  "https://cdn.discordapp.com/attachments/931699948087574538/984496035051237436/user_1.png" 
          style={{height: '90px' , width: '90px'}}
        />
            <Gambi></Gambi>
            <Textcategoria style={{paddingLeft:'100px'}}>
              Veja os itens alugados.
            </Textcategoria>
            <Gamb></Gamb>
          <CardButtons>
            <Link to="/alugados" style={{ textDecoration: "none", fontSize: "20px", color:'#fff'}}>
            <TextCard style={{paddingLeft:'25px'}}>Itens alugados</TextCard>
            </Link>
          </CardButtons>
        </CardProfile>
        <Textmid>Escolha a máquina ideal para você!</Textmid>
       <div> 
        {(categories).map((item) => {
          return(
        <Cardcategory inverse>
          <div 
          value={item.id}
           key={item.id}
           onClick={e => send(item)}
          >
           <CardImg
          alt="Card image cap"
          width="100%"
          src={'https://cdn.discordapp.com/attachments/931699948087574538/984492129525055518/pexels-anamul-rezwan-1078884.jpg'}
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

        );
})}
</div>
      </Page>  
    </>
  );
}

export default Home;
