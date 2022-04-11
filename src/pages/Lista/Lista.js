import React, {useEffect, useState} from 'react';
import './style.css';

const LIMIT = 12

function App() {
  const [nutri, setNutri] = useState([])
  const []= useState([])
  const[input, setInput]= useState([''])

  useEffect(()=>{
    function loadApi(){
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
      fetch(url)
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
        <input className='input' type="text" value={input}/>
            {nutri.map((item) =>{
              return(
                <a href='google.com'>
                <article key={item.id} className="post">
                  <img src={item.capa} alt="item.titulo" className= "capa"/>
                  <div className='conteudo'>
                    <strong className="titulo">{item.titulo}</strong> 
                    <strong className="preco">307,00</strong>
                    <p className="subtitulo">
                    {item.subtitulo}
                    </p>
                  </div>          
                </article>
                </a>
              )
            })}
    </div>
  );
}

export default App;