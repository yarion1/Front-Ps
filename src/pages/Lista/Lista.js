import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import NavbarPage from "../../components/Navbar";
import {
  Container,
  Input,
  Post,
  Capa,
  Titulo,
  Preco,
  Subtitulo,
} from "./styleLista";
import api from "../../services/api";

function App() {
  const [nutri, setNutri] = useState([]);
  const [input] = useState([""]);

  const itensPerPage = 2;
  const [offset, setOffset] = useState(0);
  const endIndex = offset + itensPerPage;
  const currentItens = nutri.slice(offset, endIndex);

  useEffect(() => {
    api
      .get("/products")
      .then((r) => r.json())
      .then((json) => {
        console.log(json);
        setNutri(json);
      });
  }, []);

  return (
    <>
      <NavbarPage />
      <Container>
        <Input type="text" placeholder="NUTRI" value={input} disabled />
        {currentItens.map((item) => {
          return (
            <Post key={item.id} onClick="location.href = ">
              <Capa src={item.capa} alt="item.titulo" className="capa" />
              <Titulo>{item.titulo}</Titulo>
              <Preco>307,00</Preco>
              <Subtitulo>{item.subtitulo}</Subtitulo>
            </Post>
          );
        })}
        <Pagination
          limit={itensPerPage}
          total={nutri.length}
          offset={offset}
          setOffset={setOffset}
        />
      </Container>
    </>
  );
}

export default App;
