import React, {Component, useState} from 'react';
import styled, {
    Formlog,
    Labelog,
    Inputlog,
    FormGrouplog,
    H3,
} from  '../../assets/styles/auth/authstyled';

import {Buttoncad,Divbuttoncad} from './styledForm.js';
import axios  from "axios";
import { useNavigate} from 'react-router-dom';

function SignUp (){

    
  const [values, setValues] = useState({ 
    email: '' , 
    password: '', 
    })
  const navigate = useNavigate();
    const inputChange = (e) => {

      const { name, value } = e.target
      setValues({
        ...values,
        [name]: value
      })
    }
 
    const [result, setResult] = useState(null);

    const sendData = event => {
      event.preventDefault();
  
      axios.post('http://localhost:5000/verify-email', {...values})
      .then(response => {
        setResult(response.data);
        if(response.data === true){
          alert('Usuário já cadastrado, Faça Login')
        }else{
          sessionStorage.setItem('email', values.email);
          sessionStorage.setItem('password', values.password);
           setValues({
            email: '',
            password: '',
          })
          navigate('/dadoscadastrais');
        }
      })
      .catch(() => {
        setResult({
          sucess: false,
        })
      })
    };
     
      return (
        <div>
          <Formlog inline onSubmit={sendData}>
          <H3>Email</H3>
             <FormGrouplog floating>
             <Inputlog
                 style={{borderRadius: '15px', height: '50px'}}
                 name="email"
                 value={values.email}
                 placeholder="Email"
                 type="email"
                 onChange={inputChange}
             />
             <Labelog for="exampleEmail">
                 Email
             </Labelog>
             </FormGrouplog>
             {' '}
             <H3>Senha</H3>
             <FormGrouplog floating>
             <Inputlog
                 style={{borderRadius: '15px', height: '20%'}}
                 name="password"
                 placeholder="Senha"
                 type="password"
                 value={values.password}
                 onChange={inputChange}
             />
             <Labelog>
                 Password
             </Labelog>
             </FormGrouplog>
             {' '}
             {' '}
             <H3 style={{right:'25px'}}>Confirmar Senha</H3>
             <FormGrouplog floating>
             <Inputlog
                 style={{borderRadius: '15px', height: '20%'}}
                 name="confirmPassword"
                 placeholder="Senha"
                 type="password"
             />
             <Labelog>
                 Confirm Password
             </Labelog>
             </FormGrouplog>
             {' '}
             <Divbuttoncad>
                 <Buttoncad style={{background:'#2166C1',
                      color:'white',
                      marginTop:'40%',
                      borderColor:'#2166C1',
                      borderRadius:'15px',
                      height:"55px",
                      fontSize: '20px',
                      fontFamily:"Roboto",
                      }}>
                     CADASTRAR-SE
                 </Buttoncad>
             </Divbuttoncad>
             
                 </Formlog>
        </div>
      )
  }
  
  
export default SignUp;
