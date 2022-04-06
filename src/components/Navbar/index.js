import React from "react";
import styled, {
    Navbar, 
    Searchform,
    Buttonsearch,
    Searchicon,
    UlItens,

} from '../../assets/styles/Navbar/stylednavbar';
import {Input} from 'reactstrap';

const NavbarPage = () => {
    return (
        <>
         <div>
             <Navbar>
                <div>
            <Searchform>
                    <Input
                    name="search"
                    placeholder="Pesquisar produtos..."
                    type="text"
                    />
            </Searchform>
                <Buttonsearch ><Searchicon/></Buttonsearch>
              </div>
             
        </Navbar>
        <div>
            <UlItens>
                <li><a href="*">Home</a></li>
                <li><a href="/pedidos">Mais pedidos</a></li>
                <li><a href="/categorias">Categorias</a></li>
                <li><a href="/empresas">Empresas</a></li>
            </UlItens>
        </div>
        </div>
     
        </>
    );
};

export default NavbarPage;