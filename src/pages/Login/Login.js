import React, {useState} from 'react';
import './Login.css';
import curvatopTop from '../../assets/img/curvatop.png'
import curvaBottom from '../../assets/img/curvabottom.png'
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';

import { Link} from 'react-router-dom'

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

 
        return(
            <>
             <div className='divleft'> 
                 <div className='botaoLogin'><button className='buttonLogin'>Login</button></div>
                 <div className='curvaButtontop'><img src={curvatopTop} /></div>
                 <div className='curvaButtonbottom'><img src={curvaBottom}></img></div>      
                 <div className='botaoSign'><button className='buttonSign' ><Link style={{textDecoration:"inherit", color:'inherit'}} to={"/register"}>Sign in</Link></button></div>
             </div>
             <div className='divright'>

             <div className='iconemail'><AiOutlineMail/></div>
             <div className='iconpassword'><RiLockPasswordFill/></div>
             <h2 className='titleLog'>Login</h2>
             <Form inline className='formlogin' onSubmit={(e)=>{e.preventDefault();  SendLogueo(Email,Password)}} >
        <FormGroup floating >
        <Input
            placeholder="Email"
            type="Email"
            onChange={({target})=>{setEmail(target.value)}}
        />
        <Label for="exampleEmail">
            Email
        </Label>
        </FormGroup>
        {' '}
        <FormGroup floating>
        <Input
            placeholder="Password"
            type="Password"
            onChange={({target})=>{setPassword(target.value)}}
  />
        <Label for="examplePassword">
            Password
        </Label>
        </FormGroup>
        {' '}
        <div className='divbtn'>
            <Button type='submit' className='btn' style={{background:'#080436',
            color:'white',
            borderColor:'#080436',
            borderRadius:'35px',
            width: '100px',
            height:"50px",
            fontSize: '20px',
            fontFamily:"Roboto",
            }}>Login</Button>
        </div>
    </Form>
   </div>
           
            </>
        );
        }

export default Login;