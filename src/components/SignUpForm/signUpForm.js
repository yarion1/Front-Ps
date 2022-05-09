import React, {Component, useState} from 'react';
import styled, {
    Formlog,
    Labelog,
    Inputlog,
    FormGrouplog,
    H3,
} from  '../../assets/styles/auth/authstyled';
import {Buttoncad,Divbuttoncad} from './styledForm.js';

class SignUp extends Component {

    state = {
      email: '',
      password: '',
      confirmpassword: '',
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
    render() {
      return (
        <Formlog inline>
        <H3>Email</H3>
           <FormGrouplog floating>
           <Inputlog
               style={{borderRadius: '15px', height: '50px'}}
               id="exampleEmail"
               name="email"
               placeholder="Email"
               type="email"
               onChange={this.handleChange}
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
               id="examplePassword"
               name="password"
               placeholder="Senha"
               type="password"
               onChange={this.handleChange}
           />
           <Labelog for="examplePassword">
               Password
           </Labelog>
           </FormGrouplog>
           {' '}
           {' '}
           <H3 style={{right:'25px'}}>Confirmar Senha</H3>
           <FormGrouplog floating>
           <Inputlog 
               style={{borderRadius: '15px', height: '20%'}}
               id="examplePassword"
               name="confirmPassword"
               placeholder="Senha"
               type="password"
               onChange={this.handleChange}
           />
           <Labelog for="examplePassword">
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
      )
    }
  }
  
export default SignUp

