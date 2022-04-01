import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import curvatopTop from '../../assets/img/curvatop.png'
import curvaBottom from '../../assets/img/curvabottom.png'
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import {AiOutlineMail} from 'react-icons/ai';
import {RiLockPasswordFill} from 'react-icons/ri';


import { useNavigate} from 'react-router-dom'

 function Sign_in () {
    return(
        <div>Pagina de cadastro</div>
    ) 

    
    /*  
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
 
        return(
            <>
             <div className='divleft'> 
                 <div className='botaoLogin'><button className='buttonLogin'>Login</button></div>
                 <div className='curvaButtontop'><img src={curvatopTop} /></div>
                 <div className='curvaButtonbottom'><img src={curvaBottom}></img></div>      
                 <div className='botaoSign'><button className='buttonSign' >Sign in</button></div>
             </div>
             <div className='divright'>
             <div className='iconemail'><AiOutlineMail/></div>
             <div className='iconpassword'><RiLockPasswordFill/></div>
             <h2 className='titleLog'>Login</h2>
             <Form inline className='formlogin' onSubmit={(e)=>{e.preventDefault();}} >
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
*/        }


export default Sign_in;