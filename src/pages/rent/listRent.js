import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import NavbarPage from "../../components/Navbar";
import { Container, Post, Capa, Titulo, Subtitulo } from "./styledrent";
import api from "../../services/api";
import ProductInspect from "../../components/ProductInspect/ProductInspect";

function Rent() {
  const [products, setProducts] = useState([]);

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
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao listar produtos!");
      });
  }, []);

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
                  onClick={() => {
                    return <ProductInspect />;
                  }}
                >
                  <Capa
                    src={item.product_name}
                    alt="item.titulo"
                    className="capa"
                  />
                  <Titulo>{item.product_name}</Titulo>
                  <Subtitulo>{item.description}</Subtitulo>
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

export default Rent;
