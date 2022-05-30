
import React, {useEffect, useState} from 'react';
import Pagination  from '../../components/Pagination/Pagination';
import NavbarPage from '../../components/Navbar';
import {Container,
        Post,
        Capa,
        Titulo,
        Subtitulo} from './styledrent';

function Rent() {
  const [nutri, setNutri] = useState([])
  
  const itensPerPage = 3
  const [offset, setOffset] = useState (0)
  const endIndex = offset + itensPerPage
  const currentItens = nutri.slice (offset, endIndex)

  useEffect(()=>{

    const loadApi = async ()=> {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      await fetch(url)
      .then((r)=>r.json())
      .then((json)=>{
        console.log(json);
        setNutri(json);
      })
    }
    loadApi();
  },[]);

  return (
    <>
      <NavbarPage/>
      <Container>          
          
              {currentItens.map((item) =>{
                return(
                  <Post key={item.id} onClick="location.href = ">
                      <Capa src={item.capa} alt="item.titulo" className= "capa"/>
                      <Titulo>{item.titulo}</Titulo> 
                
                      <Subtitulo>
                      {item.subtitulo}
                      </Subtitulo>          
                  </Post>
                )
              })}
         <Pagination limit={itensPerPage} total={nutri.length} offset={offset} setOffset={setOffset}/>
      </Container>
    </>
  );
}

export default Rent;
