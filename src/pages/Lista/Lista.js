import React, {useEffect, useState} from 'react';
import Pagination  from '../../components/Pagination/Pagination';

import {Container,
        Input,
        Post,
        Capa,
        Titulo,
        Preco,
        Subtitulo} from './styleLista';

function App() {
  const [nutri, setNutri] = useState([])
  const []= useState([])
  const[input]= useState([''])

  const itensPerPage = 2
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
      <Container>
          <Input type="text" placeholder='NUTRI' value={input} disabled/>
              {currentItens.map((item) =>{
                return(
                  <Post key={item.id} onClick="location.href = ">
                      <Capa src={item.capa} alt="item.titulo" className= "capa"/>
                      <Titulo>{item.titulo}</Titulo> 
                      <Preco>307,00</Preco>
                      <Subtitulo>
                      {item.subtitulo}
                      </Subtitulo>          
                  </Post>
                )
              })}
         <Pagination limit={itensPerPage} total={nutri.length} offset={offset} setOffset={setOffset}/>
      </Container>

  );
}

export default App;