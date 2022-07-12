/* eslint-disable react/jsx-pascal-case */
import React, {useEffect, useState} from "react";
import NavbarPage from "../../components/Navbar/index";
import ModalSenha from '../../components/Modal/ModalPassword';
import ModalPrest from '../../components/Modal/ModalPrest';
import jwtDecode from "jwt-decode";
import setAuthToken from "../../services/setAuthToken";

import {
  Userprofilecontainer,
  Botao_editar_perfil,
  Userpic,
  UserName,
  UserAge,
  UserSelects,
  UserMail,
  UserProf,
  UserPhone,
  Menu,
  ItemName,
  UserDesc,
  Frag,
  DadosWork,
  BotaoSenha,
  Fundo,
  ItemNameDesc,
} from "./styleduserprofile";
import axios from "axios";

const Valores = {
  nome: "Arthur Fernandes",
  idade: "1990-12-30",
  email: "arthur123@gmail.com",
  profissao: "Programador",
  telefone: "6340028922",
  descricao:
    "Estudante de Ciencia da Computação na Universidade Federal do Tocantins",
  genero: "Masculino",
  prestador: "Não",
};

const Userprofie = () => {
  const [Name, setName] = useState(Valores.nome)
  const [phone, setPhone] = useState(Valores.telefone)
  const [email, setEmail] = useState(Valores.email)
  const [Desc, setDesc] = useState(Valores.descricao)
  const [Gen, setGen] = useState(Valores.genero)
  const [Prest, setPres] = useState(Valores.prestador)
  const [Prof, setProf] = useState(Valores.profissao)
  const [Nasc, setNasc] = useState(Valores.idade)
  const [Edit, setEdit] = useState(true)
  
  const [showModalPrest, setShowModalPrest]= useState(false);
  const togglePrest = () => setShowModalPrest(!showModalPrest);

  const [showModalSenha, setShowModalSenha] = useState(false);
  const toggleSenha = () => setShowModalSenha(!showModalSenha);

  const clickEditar = () => {
    setEdit((current) => !current);
  };



    const jwtToken =  localStorage.getItem("x-access-token")


      const userData = jwtDecode(jwtToken)
      const id = userData.user_id;
      const [user, setUser] = useState([''])
      const [loading, setIsLoading] = useState(true);
    
       let dataBanco=  user.birthdate;

          function dataFormatada(dataBanco){
            let data = new Date(dataBanco),
                dia  = data.getDate().toString(),
                diaF = (dia.length == 0) ? '0'+dia : dia,
                mes  = (data.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
                mesF = (mes.length == 1) ? '0'+mes : mes,
                anoF = data.getFullYear();
            
            // return diaF+"/"+mesF+"/"+anoF;

            console.log(diaF+"/"+mesF+"/"+anoF);
          }

          /* ###### data vindo do banco exemplo com PHP
            dataBanco="<?php echo $dataBanco ?>";
          ########################################### */

          

          //chamada da função
          dataFormatada(dataBanco)
      
            useEffect(()=>{
              if(loading){
                setIsLoading(true)
                axios.get(`http://localhost:5000/users/${id}`)
                .then(response=>{
                  setUser(response.data)
                  setIsLoading(false)
              }).catch(error=>{
                  alert(error)
              })
              }
            },[])
    
  
return(
  <>
        <NavbarPage />        
        <Fundo>
        <Userprofilecontainer>
          <Menu>
            <Frag>
              <Userpic src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />
              <ItemName>Email:</ItemName>
                <UserMail
                  type="email"
                  name="email"
                  value={user.email}
                />


              <ItemName>Nome:</ItemName>
              <UserName
                name="nome"
                disabled={Edit}
                value={user.name}
              />
              <ItemName>cpf:</ItemName>
                <UserProf
                  type="text"
                  name="address"
                  value={user.cpf}
                  disabled={Edit}
                
                />
                <ItemName>Gênero:</ItemName>
                       <UserSelects
                       name="genero"
                       disabled={Edit}
                       value={user.genre}
                      
                     >
                       <option>Masculino</option>
                       <option>Feminino</option>
                       <option>Outro</option>
                     </UserSelects>
                 <ItemName>Prestador de serviços?</ItemName>               
                 <UserSelects
                  name="prestador"
                  
                  
                  disabled={Edit}
                >
                  <option>Não</option>
                  <option>Sim</option>
                </UserSelects>
              </Frag>

            <Frag>
              <ItemNameDesc>Descrição:</ItemNameDesc>
              <UserDesc
                name="descricao"
                disabled={Edit}
                
               
              />
              <BotaoSenha
                onClick={() => {
                  toggleSenha();
                }}
              >
                Alterar senha
              </BotaoSenha>
              <ItemName>Data de nascimento:</ItemName>
                <UserAge
                  type="text"
                  disabled={Edit}
                  name="dataNasc"
                
               
                />

                <ItemName>Telefone:</ItemName>
                <UserPhone
                 
                  type="tel"
                  disabled={Edit}
                  name="telefone"
                  value={user.phone_number}
                />

                <ItemName>Endereço:</ItemName>
                <UserProf
                  type="text"
                  name="address"
                  value={user.address}
                  disabled={Edit}
                
                />
                <ItemName>cep:</ItemName>
                <UserProf
                  type="text"
                  name="cep"
                  value={user.cep}
                  disabled={Edit}
                
                />
              </Frag>
              </Menu>    
          {Prest==="Sim" ?(
          <DadosWork onClick={() => {togglePrest()}} >Dados do prestador</DadosWork>
          ):(<p>{}</p>)}         

          <Botao_editar_perfil onClick={clickEditar}>
            {Edit ? "Editar" : "Salvar"}
          </Botao_editar_perfil>
        </Userprofilecontainer>

  <ModalPrest show={showModalPrest} toggleShow={() => {togglePrest()}} />
  <ModalSenha show={showModalSenha} toggleShow={() => {toggleSenha()}} />
  </Fundo>
      </>
  )
}

export default Userprofie;
