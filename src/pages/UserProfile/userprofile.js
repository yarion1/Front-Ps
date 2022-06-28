/* eslint-disable react/jsx-pascal-case */
import React, {useState} from "react";
import NavbarPage from "../../components/Navbar/index";
import ModalSenha from '../../components/Modal/ModalPassword';
import ModalPrest from '../../components/Modal/ModalPrest';

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
  ItemNameDesc
} from "./styleduserprofile";

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

}

export default () => {
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

  const [showModalSenha, setShowModalSenha]= useState(false);
  const toggleSenha = () => setShowModalSenha(!showModalSenha);


const clickEditar = () => {
  setEdit(current => !current)
}

return(
  <>
        <NavbarPage />        
        <Fundo>
        <Userprofilecontainer>
        <Menu>
            <Frag>
            <Userpic src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"/>
              <ItemName>Email:</ItemName>
                <UserMail
                  type="email"
                  name="email"
                  value={email}
                  disabled={Edit}
                  onChange={e => setEmail(e.target.value)}
                />

              <ItemName>Nome:</ItemName>
              <UserName
                name="nome"
                value={Name}
                disabled={Edit}
                onChange={e => setName(e.target.value)}
              />
                <ItemName>Gênero:</ItemName>
                       <UserSelects
                       name="genero"
                       disabled={Edit}
                       value={Gen}
                       onChange={e => setGen(e.target.value)}
                     >
                       <option>Masculino</option>
                       <option>Feminino</option>
                       <option>Outro</option>
                     </UserSelects>
                 <ItemName>Prestador de serviços?</ItemName>               
                 <UserSelects
                  name="prestador"
                  value={Prest}
                  onChange={e => setPres(e.target.value)}
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
                value={Desc}
                onChange={e => setDesc(e.target.value)}
              />
              <BotaoSenha onClick={() => {toggleSenha()}}>Alterar senha</BotaoSenha>
              <ItemName>Data de nascimento:</ItemName>
                <UserAge
                  value={Nasc}
                  min="1900-01-01"
                  max="2022-01-01"
                  type="date"
                  disabled={Edit}
                  name="dataNasc"
                  onChange={e => setNasc(e.target.value)}
                />

                <ItemName>Telefone:</ItemName>
                <UserPhone
                  value={phone}
                  type="tel"
                  disabled={Edit}
                  name="telefone"
                  onChange={e => setPhone(e.target.value)}
                />

                <ItemName>Profissão:</ItemName>
                <UserProf
                  type="text"
                  name="profissao"
                  value={Prof}
                  disabled={Edit}
                  onChange={e => setProf(e.target.value)}
                />
              </Frag>
              </Menu>    
          {Prest==="Sim" ?(
          <DadosWork onClick={() => {togglePrest()}} >Dados do prestador</DadosWork>
          ):(<p>{}</p>)}         

          <Botao_editar_perfil onClick={clickEditar} >{Edit ? "Editar" : "Salvar"}
          </Botao_editar_perfil>     
        </Userprofilecontainer>
        

  <ModalPrest show={showModalPrest} toggleShow={() => {togglePrest()}} />
  <ModalSenha show={showModalSenha} toggleShow={() => {toggleSenha()}} />
  </Fundo>
      </>
  )
}
