// import React, { useEffect, useState } from 'react';
// import { useNavigate} from 'react-router-dom';
// import styled, {
//     Globalpage,
// } from  '../../../assets/styles/auth/authstyled';
// import {CardBody,CardHeader, Button,
// Form, FormGroup,Label,Input, Row,Col} from 'reactstrap';
// import {CardData, Container, Item} from './StyledDadosCadastrais';
// import  {cpfMask, phoneMask}  from '../../../components/Mask/mask';
// import axios  from "axios";

//  function DadosCadastro () {

//     const [values, setValues] = useState({ 
//       email: sessionStorage.getItem('email'),
//       password: sessionStorage.getItem('password'),
//       cpf: '' , 
//       cep: '', 
//       phone_number: '',
//       name: '',
//       birthdate:'',
//       genre: [
//         {id:1, name:'Feminino'},
//         {id:2, name:'Masculino'},
//         {id:3, name:'Outros'},
//       ],
//       address: '',
//       typeuser: ''
//       type_user: 0,
//       rate:0.0
//       })

  

//     const inputChange = (e) => {

//       const { name, value } = e.target
//       setValues({
//         ...values,
//         [name]: value
//       })
//     }
 
//   const [result, setResult] = useState(null);

//   const sendData = event => {
//     event.preventDefault();

//     axios.post('http://localhost:5000/users', {...values})
//     .then(response => {
//       setResult(response.data);
//       setValues({
//         cpf: '' , 
//         cep: '', 
//         phone_number: '',
//         name: '',
//         birthdate:'',
//         genre: '',
//         address: '',
//         typeuser: ''
//       })
//   const navigate = useNavigate();

//   const sendData = event => {
//     event.preventDefault();
//     axios.post('http://localhost:5000/register', {...values})
//     .then(response => {
//       setResult(response.data);

//     })
//     .catch(() => {
//       setResult({
//         sucess: false,
//       })
//     })

//     navigate('/login');
//   };
   
  
//     return(
//         <Globalpage>
//           <div>
//             <CardData 
//              style={{borderTopColor: '#2166C1',
//                     borderLeftColor: '#2166C1', 
//                     borderRightColor: '#2166C1',
//              }}>
//               <CardHeader tag="h5" style={{background:'#2166C1', borderColor:'#2166C1'}}>
//                 CADASTRO DE DADOS
//               </CardHeader>
//               <CardBody>
//               <Form onSubmit={sendData}>
//               <FormGroup style={{paddingLeft:'10px'}}>
//                 <Label>
//                   Nome completo

//                 </Label>
//                 <Input
//                   name="name"
//                   type="text"
//                   value={values.name}
//                   onChange={inputChange}
//                 />
//               </FormGroup>
//               <FormGroup style={{paddingLeft:'10px'}}>
//                 <Container>
//                   <Item>
//                     <Label>
//                       CPF
//                     </Label>
//                     <Input
//                       name="cpf"
//                       value={cpfMask(values.cpf)}
//                       onChange={inputChange}
//                     />
//                   </Item>
//                    <Item>
//                      <Label>
//                       Data de nascimento
//                    </Label>
//                      <Input
//                       name="birthdate"
//                       type="date"
//                       value={values.date}
//                       onChange={inputChange}
//                      />
//                    </Item>
//                    <FormGroup tag="fieldset">
//                          Gênero
//                       <Row style={{marginTop:'5px'}} >
//                         <Col>
//                           <FormGroup check>
//                             <Item>
//                               <Input
//                                id='1'
//                                name='genre'
//                                 type="radio"
//                                 value='Feminino'
//                                 checked={values.genre === 'Feminino'}
//                                 onChange={inputChange}
                               
//                               />
//                               {' '}
//                               <Label check>
//                                 Feminino
//                               </Label>
//                             </Item>
//                           </FormGroup>
//                         </Col>
//                         <Col>
//                           <FormGroup check>
//                             <Item>
//                               <Input
//                                 name="genre"
//                                 id='2'
//                                 type="radio"
//                                 value='Masculino'
//                                 checked={values.genre === 'Masculino'}
//                                 onChange={inputChange}

//                               />
//                               {' '}
//                               <Label check>
//                                Masculino
//                               </Label>
//                             </Item>
//                           </FormGroup>
//                         </Col>
//                         <Col>
//                           <FormGroup check>
//                             <Item>
//                               <Input
//                                 name="genre"
//                                 id='2'
//                                 type="radio"
//                                 value='Outros'
//                                 checked={values.genre === 'Outros'}
//                                 onChange={inputChange}
                             
//                               />
//                               {' '}
//                               <Label check>
//                                Outros
//                               </Label>
//                             </Item>
//                           </FormGroup>
//                         </Col>
//                       </Row>
                    
//                     </FormGroup>
//                 </Container>
//               </FormGroup>
//               <FormGroup style={{paddingLeft:'10px'}}>
//                 <Container>
//                   <Item>
//                     <Label>
//                       Endereço
//                     </Label>
//                     <Input
//                       name="address"
//                       type='text'
//                       value={values.address}
//                       onChange={inputChange}
//                     />
//                   </Item>
//                   <Item>
//                     <Label>
//                       CEP
//                     </Label>
//                     <Input
//                       name="cep"
//                       type='number'
//                       value={values.cep}
//                       onChange={inputChange}
//                     />
//                   </Item>
//                   <Item>
//                     <Label>
//                       Telefone
//                     </Label>
//                     <Input
//                       name="phone_number"
//                       placeholder='( ) xxxxx-xxxx'
//                       value={phoneMask(values.phone_number)}
//                       onChange={inputChange}
//                     />
//                   </Item>
//                 </Container>
//               </FormGroup>
//               <FormGroup style={{paddingLeft:'10px'}}>
//                   <Label for="exampleSelect">
//                     Selecione a sua finalidade
//                   </Label>
//                   <Input
//                     name="type_user"
//                     type="select"
//                     onChange={inputChange}
//                     value = {values}
//                     placeholder="Selecione uma opção"
//                     >
//                     <option
//                       value={1}
//                     >
//                       Cliente
//                     </option>
//                     <option
//                       value={2}
//                     >
//                       Anunciante
//                     </option>
//                     {/* <option
//                       name="typeUser"
//                       value={2}
//                       onChange={inputChange}>
                      
//                     </option> */}
//                   </Input>
//                 </FormGroup>
//               <Button  style={{background:'#2166C1', borderColor: '#2166C1'}}>
//                 CADASTRAR
//               </Button>
//             </Form>
//               </CardBody>
//             </CardData>
//           </div>
//         </Globalpage>        
//     )  
//   }

// export default DadosCadastro;