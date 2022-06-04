import React from 'react';
import { useNavigate} from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import styled, {
    Globalpage,
    Cardpage,
    Cardlogin,
    Imagelogosign,
    Textinfo,
    Titlelog,
} from  '../../assets/styles/auth/authstyled';
import SignUpForm from '../../components/SignUpForm/signUpForm.js'
import {DivLogin} from './styledSign.js';

 function SignUp () {
  
    let navigate = useNavigate();

    function handleClicklogin(){
        navigate('/login');
    }
    return(
        <Globalpage>
             <Cardpage>
                   <Cardlogin style={{top:'8%', height: '85%'}}>
                        <Titlelog>
                            CADASTRAR
                        </Titlelog>
                        <SignUpForm/>
                    </Cardlogin>
                    <Textinfo><h2>Alugue equipamentos, máquinas e ferramentas para o seu trabalho</h2></Textinfo>
                    <Imagelogosign>
                         <img src={logo}/>
                    </Imagelogosign>
                    <DivLogin>
                        <h2 style={{marginTop: '6px'}}>Possui login? </h2>
                        <button onClick={handleClicklogin}> Entre aqui.</button>  
                   </DivLogin>
                </Cardpage>
        </Globalpage>        
    )  
  }

export default SignUp;