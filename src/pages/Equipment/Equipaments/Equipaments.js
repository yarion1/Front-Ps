import React, { useEffect, useState } from "react";
import Pagination from "../../../components/Pagination/Pagination";
import NavbarPage from "../../../components/Navbar";
import { Container, Post, Capa, Titulo, Subtitulo, Price } from "../../rent/styledrent";
import api from "../../../services/api";
import { useNavigate, Navigate } from "react-router-dom";

function Equipaments() {
  const [products, setProducts] = useState([]);
  const navigate= useNavigate();
  const itensPerPage = 3;
  const [offset, setOffset] = useState(0);
  const endIndex = offset + itensPerPage;
  const currentItens = products.slice(offset, endIndex);

  useEffect(() => {
    api
      .get("/products")
      .then((res) => {
        if (res.data) {
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao listar produtos!");
      });
  }, []);

  const [isloading, setIsloading] = useState(false);

  const send = (value) =>{
    if(isloading ===false){
      setIsloading(true);
      sessionStorage.setItem('produto', value.id);
      setIsloading(false)
      navigate(`/product-inspect/*/`);
    }

  }

  return (
    <>
      <NavbarPage />
      <Container>
        {currentItens.length > 0 ? (
          <>
            {currentItens.map((item) => {
              return (
                <Post
                  key={item.id}
                  value={item.id}
                  onClick={(e) => send(item)}
                >
                  <Capa
                    src={item.product_name}
                    alt="item.imagem"
                    className="capa"
                  />
                  <Titulo>{item.product_name}</Titulo>
                  <Subtitulo>{item.description}</Subtitulo>
                  <div>
                    <Subtitulo><b>Proprietário:</b> {item.users_name}</Subtitulo>
                  </div>
                  <Price> <h2>{item.price}</h2></Price>
                </Post>
              );
            })}
            <Pagination
              limit={itensPerPage}
              total={products.length}
              offset={offset}
              setOffset={setOffset}
            />
          </>
        ) : (
          "Nenhum produto encontrado"
        )}
      </Container>
    </>
  );
}

export default Equipaments;
