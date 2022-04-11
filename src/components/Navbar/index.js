import React from "react";
import styled, {
    Navbar, 
    Searchform,
    Buttonsearch,
    UlItens,
    Linha,
    IconCart,
    Titlecart,

} from '../../assets/styles/Navbar/stylednavbar';
import {Input} from 'reactstrap';

const NavbarPage = () => {
    return (
        <>
         <div>
             <Navbar style={{alignItems: 'center', justifyContent:'center'}}>
                <div>
                    <Searchform style={{display: 'flex', flexDirection: 'row'}}>
                        <Input
                            style={{width: '80%', marginRight: '-10%'}}
                            name="search"
                            placeholder="Pesquisar produtos..."
                            type="search"
                        />
                        <Buttonsearch style={{pddingTop: '20px'}}></Buttonsearch>
                    </Searchform>
                  
              </div>
            <div>
                <div style={{textAlign: 'center'}}>
                    <IconCart/>
                    <Titlecart>Suas compras</Titlecart>
                </div>
            </div>
        </Navbar>
        <Linha style={{alignItems: 'center', justifyContent:'center'}}>
            <UlItens>
                <li><a href="*">Home</a></li>
                <li><a href="/pedidos">Mais pedidos</a></li>
                <li><a href="/categorias">Categorias</a></li>
                <li><a href="/ferramentas">Ferramentas</a></li>
                <li><a href="/equipamento">Equipamentos</a></li>
                <li><a href="/empresas">Empresas</a></li>
            </UlItens>
        </Linha>
        </div>
     
        </>
    );
};

export default NavbarPage;