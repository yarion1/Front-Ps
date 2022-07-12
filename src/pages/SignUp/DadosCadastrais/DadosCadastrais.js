import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import styled, {
    Globalpage,
} from  '../../../assets/styles/auth/authstyled';
import {CardBody,CardHeader, Button,
Form, FormGroup,Label,Input, Row, Col, Select} from 'reactstrap';
import {CardData, Container, Item} from './StyledDadosCadastrais';
import  {cpfMask, phoneMask}  from '../../../components/Mask/mask';
import axios  from "axios";
import { useDispatch } from 'react-redux';
import { registerAction } from '../../../store/actions';

import {
  CardBody,
  CardHeader,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
} from "reactstrap";

function DadosCadastro () {


  const [email, setEmail] = useState(sessionStorage.getItem('email'));
  const [password, setPassword] = useState(sessionStorage.getItem('password'));
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [genre, setGenre] = useState([
    {id:1, name:'Feminino'},
    {id:2, name:'Masculino'},
    {id:3, name:'Outros'},
  ]);

  const [address, setAddress] = useState('');
  const [type_user, setType_user] = useState(0);
  const [rate, setRate] = useState(0.0);
   
  const [errorMessage, setError] = useState("")

  const dispatch = useDispatch()
 
  const navigate = useNavigate();
  
  const sendData = (event) => {
    event.preventDefault();

    const newUser = {
      email,
      password,
      cpf, 
      cep, 
      phone_number,
      name,
      birthdate,
      genre,
      address,
      type_user,
      rate,
    }
    const validate = dispatch(registerAction(newUser));
    validate.then(response => {
      navigate('/login');
    })
    .catch(error => setError(error.data.err))
    navigate('/login');
  
  };
   

  
    return(
        <Globalpage>
          <div>
            <CardData 
             style={{borderTopColor: '#130A1D',
                    borderLeftColor: '#130A1D', 
                    borderRightColor: '#130A1D',
             }}>
              <CardHeader tag="h5" style={{background:'#130A1D', borderColor:'#130A1D', color:'#fff'}}>
                CADASTRO DE DADOS
              </CardHeader>
              <CardBody>
              <Form onSubmit={sendData}>
              <FormGroup style={{paddingLeft:'10px'}}>
                <Label>
                  Nome completo
                </Label> 
                <Input
                  name="name"
                  value={name}
                  type="text"
                  onChange={e => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup style={{ paddingLeft: "10px" }}>
                <Container>
                  <Item>
                    <Label>CPF</Label>
                    <Input
                      name="cpf"
                      value={cpfMask(cpf)}
                      onChange={e => setCpf(e.target.value)}
                    />
                  </Item>
                  <Item>
                    <Label>Data de nascimento</Label>
                    <Input
                      name="birthdate"
                      value={birthdate}
                      type="date"
                      onChange={e => setBirthdate(e.target.value)}
                     />
                   </Item>
                   <FormGroup tag="fieldset">
                         Gênero
                      <Row style={{marginTop:'5px'}} >
                        <Col>
                          <FormGroup check>
                            <Item>
                              <Input
                               id='1'
                               name='genre'
                                type="radio"
                                value='Feminino'
                                checked={genre === 'Feminino'}
                                onChange={e => setGenre(e.target.value)}
                               
                              />
                              {' '}
                              <Label check>
                                Feminino
                              </Label>
                            </Item>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check>
                            <Item>
                              <Input
                                name="genre"
                                id='2'
                                type="radio"
                                value='Masculino'
                                checked={genre === 'Masculino'}
                                onChange={e => setGenre(e.target.value)}

                              />
                              {' '}
                              <Label check>
                               Masculino
                              </Label>
                            </Item>
                          </FormGroup>
                        </Col>
                        <Col>
                          <FormGroup check>
                            <Item>
                              <Input
                                name="genre"
                                id='2'
                                type="radio"
                                value='Outros'
                                checked={genre === 'Outros'}
                                onChange={e => setGenre(e.target.value)}
                             
                              />
                              {' '}
                              <Label check>
                               Outros
                              </Label>
                            </Item>
                          </FormGroup>
                        </Col>
                      </Row>
                    
                    </FormGroup>
                </Container>
              </FormGroup>
              <FormGroup style={{ paddingLeft: "10px" }}>
                <Container>
                  <Item>
                    <Label>Endereço</Label>
                    <Input
                      name="address"
                      type='text'
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                    />
                  </Item>
                  <Item>
                    <Label>CEP</Label>
                    <Input
                      name="cep"
                      type='number'
                      value={cep}
                      onChange={e => setCep(e.target.value)}
                    />
                  </Item>
                  <Item>
                    <Label>Telefone</Label>
                    <Input
                      name="phone_number"
                      placeholder='( ) xxxxx-xxxx'
                      value={phoneMask(phone_number)}
                      onChange={e => setPhone_number(e.target.value)}
                    />
                  </Item>
                </Container>
              </FormGroup>
              <FormGroup style={{paddingLeft:'10px'}}>
                  <Label for="exampleSelect">
                    Selecione a sua finalidade
                  </Label>
                  <Input
                    name="type_user"
                    type="select"
                    onChange={e => setType_user(e.target.value)}
                    value = {type_user}
  
                    placeholder="Selecione uma opção"
                    >
                    <option
                      value={1}
                    >
                      Cliente
                    </option>
                    <option
                      value={2}
                    >
                      Anunciante
                    </option>
                    {/* <option
                      name="typeUser"
                      value={2}
                      onChange={inputChange}>
                      
                    </option> */}
                </Input>
              </FormGroup>
              <Button style={{ background: "#130A1D", borderColor: "#130A1D" }}>
                CADASTRAR
              </Button>
            </Form>
          </CardBody>
        </CardData>
      </div>
    </Globalpage>
  );
}

export default DadosCadastro;
