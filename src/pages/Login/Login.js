import React, {useState} from 'react';
import styled, {
    Globalpage,
    Cardpage,
    Cardlogin,
    Imageconstructor,
    Textinfo,
    Imagelogo,
    Titlelog,
    Formlog,
    Labelog,
    Buttonlog,
    Inputlog,
    FormGrouplog,
    Divbutton,
    H3,
    DivBtn,
    Divregister

} from  '../../assets/styles/auth/authstyled';
import constructor from '../../assets/img/constructor.png';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useStore } from 'react-redux';
import { loginAction  } from '../../store/actions';

 function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setError] = useState("")
    const dispatch = useDispatch()
    const store = useStore()
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault();

        const userCredential = {
            email,
            password
        }
        const login = dispatch(loginAction(userCredential))
        login
            .then((res) => {
                navigate('/preloader')
            })
            .catch(error => setError(error.err))
    }

  
    function handleClickregister(){
        navigate('/register');
    }

        return(
            <>

             <Globalpage>
                <Cardpage>
                
                   <Cardlogin>
                        <Titlelog>
                            LOGIN
                        </Titlelog>
                        <Formlog inline onSubmit={handleSubmit}>
                         <H3>Email</H3>
                            <FormGrouplog floating>
                            <Inputlog
                                style={{borderRadius: '15px', height: '50px'}}
                                name="email"
                                placeholder="Email"
                                type="email"
                                onChange={e=>setEmail(e.target.value)}
                                value={email}
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
                                onChange={e=>setPassword(e.target.value)}
                                name="password"
                                placeholder="Senha"
                                type="password"
                                value={password}
                            />
                            <Labelog for="examplePassword">
                                Password
                            </Labelog>
                            </FormGrouplog>
                            {' '}
                              <DivBtn>
                                  <button>Esqueceu sua senha?</button>
                              </DivBtn>
                            <Divbutton>
                                <Buttonlog
                            
                                     style={{background:'#2166C1',
                                     color:'white',
                                     borderColor:'#2166C1',
                                     borderRadius:'15px',
                                     height:"55px",
                                     fontSize: '20px',
                                     fontFamily:"Roboto",
                                     }}>
                                    LOGIN
                                </Buttonlog>
                            </Divbutton>
                            <Divregister> 
                                <h2>Ainda não tem cadastro? </h2>
                                <button onClick={handleClickregister}>Registre-se aqui.</button>  
                            </Divregister>
                        </Formlog>
                    </Cardlogin>
                    <Textinfo><h2>Alugue equipamentos, máquinas e ferramentas para o seu trabalho</h2></Textinfo>
                    <Imageconstructor>
                        <img src={constructor} alt='constructor'/>
                    </Imageconstructor>
                </Cardpage>
             </Globalpage>
            </>
        );
        }

export default Login;