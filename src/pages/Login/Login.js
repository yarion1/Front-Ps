import React, {useState} from 'react';
import styled, {
    Globalpage,
    Divleft,
    Divright,
    Divbtn,
    BotaoLogin,
    ButtonSign,
    ButtonLogin,
    TitleLog,
    Iconemail,
    Iconpassword,
    Formlogin,
    InputLogin,
    Buttonlogin,
    Labell,

} from  '../../assets/styles/auth/authstyled';
import { FormGroup} from 'reactstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';

import { useNavigate} from 'react-router-dom'

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
    let navigate = useNavigate();

    function handleClick(){
        navigate('/register');
    }
 
        return(
            <>
             <Globalpage>
                 <Divleft>
                     <BotaoLogin><ButtonLogin>Login</ButtonLogin></BotaoLogin>
                     <div> <ButtonSign onClick={handleClick}>Sign in</ButtonSign> </div>
                 </Divleft>
                 <Divright>
                     <Iconemail><AiOutlineMail/></Iconemail>
                     <Iconpassword><RiLockPasswordFill/></Iconpassword>
                     <TitleLog>Login</TitleLog>
                     <Formlogin inline onSubmit={(e)=>{e.preventDefault();  SendLogueo(Email,Password)}} >
                             <FormGroup floating >
                             <InputLogin
                                 placeholder="Email"
                                 type="Email"
                                 onChange={({target})=>{setEmail(target.value)}}
                             />
                             <Labell for="exampleEmail">
                                 Email
                             </Labell>
                             </FormGroup>
                             {' '}
                             <FormGroup floating>
                             <InputLogin
                                 placeholder="Password"
                                 type="Password"
                                 onChange={({target})=>{setPassword(target.value)}}
                       />
                             <Labell for="examplePassword">
                                 Password
                             </Labell>
                             </FormGroup>
                             {' '}
                             <Divbtn>
                                 <Buttonlogin type='submit' style={{background:'#080436',color:'white',
                                 borderColor:'#080436',
                                 borderRadius:'35px',
                                 width: '100px',
                                 height:"50px",
                                 fontSize: '20px',
                                 fontFamily:"Roboto",
                                 }}>Login</Buttonlogin>
                             </Divbtn>
                         </Formlogin>
              
                    </Divright>
             </Globalpage>
            </>
        );
        }

export default Login;