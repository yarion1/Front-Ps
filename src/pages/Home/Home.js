import React from "react";
import NavbarPage from "../../components/Navbar/index";
import styled, {
    Categoria,
    Textcategoria

} from './styledhomepage';

function Home () {

 return(
    <>
    <NavbarPage/>
    <div className="tc"></div>
        <Categoria className="categoria">
            <Textcategoria>Nome da Categoria</Textcategoria>
        </Categoria>
    </>
 );
}

export default Home;