import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import NavbarPage from "../../components/Navbar";
import { Container, Post, Capa, Titulo, Subtitulo, Price } from "./styledrent";
import api from "../../services/api";
import ProductInspect from "../../components/ProductInspect/ProductInspect";
import { useNavigate, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function MyRent() {
  const [products, setProducts] = useState([]);
const navigate= useNavigate();
  const itensPerPage = 3;
  const [offset, setOffset] = useState(0);
  const endIndex = offset + itensPerPage;
  const currentItens = products.slice(offset, endIndex);

  const jwtToken =  localStorage.getItem("x-access-token")
  const userData = jwtDecode(jwtToken)
  const id = userData.user_id;

  useEffect(() => {
    api
      .get(`/rent_product/${id}`)
      .then((res) => {
        if (res.data) {
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
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
                  value={item.id}
                >
                  <Capa
                    src={item.name_quipament}
                    alt="item.imagem"
                    className="capa"
                  />
                  <Titulo>{item.name_equipament}</Titulo>
                  <Subtitulo>{item.description}</Subtitulo>
                  <Price><h2>{item.price}</h2></Price>
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
          "Você ainda não alugou um item"
        )}
      </Container>
    </>
  );
}

export default MyRent;
