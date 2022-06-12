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
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';
import constructor from '../../assets/img/constructor.png';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import logo from '../../assets/img/logoblue.svg';
import PreLoader from '../../components/PreLoader/PreLoader';
/**
 * 
 * @param {*} Email 
 * @param {*} Password 
 */
function SendLogueo(Email,Password){
    let dataEmail = {
        Email: Email,
        Password: Password
    }
    let Options = {
        method:'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataEmail)
    }
    fetch('http://localhost:3000/',Options)
    .then(response=> response.json())
    .then(({data,notification})=>{
        alert(notification.msg);
        const {Cookie,loggued} = data;
        if(loggued){
            document.cookie = "usuarioLogueado= ;expires = Thu, 01 Jan 1970 00:00:00 GMT"
            let expires = new Date();
            expires.setTime(expires.getTime() + 86400000);
            let cookie = `usuarioLogueado=${
                Cookie
                };expires=${expires.toUTCString()};path=/`;
            document.cookie = cookie;
            window.location.reload();
        }
    })
    .catch(err=>{
        console.log(err);
    })

}
/**
 * 
 */

 function Login () {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleClickregister(){
        navigate('/register');
    }

    function handleClickLogin(){
        navigate('/PreLoader');
    }

  
    
        return(
            <>

             <Globalpage>
                <Cardpage>
                
                   <Cardlogin>
                        <Titlelog>
                            LOGIN
                        </Titlelog>
                        <Formlog inline>
                         <H3>Email</H3>
                            <FormGrouplog floating>
                            <Inputlog
                                style={{borderRadius: '15px', height: '50px'}}
                                id="exampleEmail"
                                name="email"
                                placeholder="Email"
                                type="email"
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
                                     onClick={handleClickLogin}
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