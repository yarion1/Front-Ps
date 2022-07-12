import React, { useEffect, useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import NavbarPage from "../../components/Navbar";
import { Container, Post, Capa, Titulo, Subtitulo, Price } from "./styledrent";
import api from "../../services/api";
import ProductInspect from "../../components/ProductInspect/ProductInspect";
import { useNavigate, Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function Alugados() {
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
      .get(`/productsuser/${id}`)
      .then((res) => {
        if (res.data) {
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao listar os alugueis!");
      });
  }, []);
  const [listproducts, setListProducts] = useState([]);

  useEffect(() => {
    api
      .get("/rent_product")
      .then((res) => {
        if (res.data) {
          setListProducts(res.data);

        }
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao listar produtos!");
      });
  }, []);
  
const [alugados, setAlugados] = useState(['']);

  let Users = listproducts.filter((listproducts)=> {
    return products.find((products)=> {
      if( products.id === listproducts.product_id){
         return listproducts;
      }
    })
  })

  return (
    <>
      <NavbarPage />
      <Container>
        {currentItens.length > 0 ? (
          <>
            {(Users).map((item) => {
              return (
                <Post
                  key={item.id}
                  value={item.id}
                >
                  <Capa
                    src={item.name_equipament}
                    alt="item.imagem"
                    className="capa"
                  />
                  <Titulo>{item.name_equipament}</Titulo>
                  <Subtitulo>{item.description}</Subtitulo>
                  <Subtitulo><b>Cliente: </b>{item.users_name}</Subtitulo>
                  <Subtitulo><b>Telefone: </b>{item.phone}</Subtitulo>
                  <Price
                  >
                    <h2>{item.price}</h2>
                  </Price>
                 
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

export default Alugados;
