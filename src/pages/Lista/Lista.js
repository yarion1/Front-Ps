import React, {useEffect, useState} from 'react';
import Pagination  from './Pagination';
import './style.css';

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
      <div className="container">
          <input className='input' type="text" placeholder='NUTRI' value={input} disabled/>
              {currentItens.map((item) =>{
                return(
                  <a href=''>
                  <article key={item.id} className="post">
                      <img src={item.capa} alt="item.titulo" className= "capa"/>
                      <strong className="titulo">{item.titulo}</strong> 
                      <strong className="preco">307,00</strong>
                      <p className="subtitulo">
                      {item.subtitulo}
                      </p>          
                  </article>
                  </a>
                )
              })}
         <Pagination itensPerPage={itensPerPage} currentItens={currentItens} currentPage={currentPage} pages = {pages} setCurrentPage = {setCurrentPage} />
      </div>

  );
}

export default App;