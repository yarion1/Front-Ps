
import React, {useEffect, useState} from 'react';

import NavbarPage from "../../components/Navbar";
import "./styledrent";
import './rent.css';


function App() {
  const [nutri, setNutri] = useState([])
  const []= useState([])
  const[input]= useState([''])

  const itensPerPage = 1
  const [ currentPage, setCurrentPage ]= useState (0)

  const pages = Math.ceil ( nutri.length / itensPerPage )
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = nutri.slice (startIndex, endIndex)

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
      <div>
        <NavbarPage/>
        <div className="container">
            <div className='input'>Meus Alugueis</div>
                {currentItens.map((item) =>{
                  return(
                    <a href=''>
                    <article key={item.id} className="poste">
                        <img src={item.capa} alt="item.titulo" className= "capas"/>
                        <strong className="titulos">{item.titulo}</strong> 
                        <strong className="status">pendente</strong>
                        <p className="subtitulos">
                        {item.subtitulo}
                        </p>     
                    </article>
                    <article key={item.id} className="poste">
                        <img src={item.capa} alt="item.titulo" className= "capas"/>
                        <strong className="titulos">{item.titulo}</strong> 
                        <strong className="status">pendente</strong>
                        <p className="subtitulos">
                        {item.subtitulo}
                        </p>     
                    </article>
                    <article key={item.id} className="poste">
                        <img src={item.capa} alt="item.titulo" className= "capas"/>
                        <strong className="titulos">{item.titulo}</strong> 
                        <strong className="status">pendente</strong>
                        <p className="subtitulos">
                        {item.subtitulo}
                        </p>     
                    </article>
                    </a>

                  )
                })}
         
        </div>
      </div>

  );
};

export default App;
