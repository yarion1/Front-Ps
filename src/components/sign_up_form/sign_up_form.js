import React, {Component, useState} from 'react';
import './sign_up_form.css';
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import {RiLockPasswordFill} from 'react-icons/ri';

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
          <Form inline className='formSign_up'  onSubmit={this.handleSubmit }>
            <FormGroup floating >
              <Input
                  placeholder="email"
                  type="email" 
                  onChange={this.handleChange}
              />
              <Label for="exampleEmail">
                  Email
              </Label>
            </FormGroup>
            {' '}            
            <FormGroup floating >
              <Input
                  placeholder="Password"
                  type="Password" 
                  onChange={this.handleChange}
              />
              <Label for="examplePassword">
                  Password
              </Label>
            </FormGroup>
            {' '}
            <FormGroup floating >
              <Input
                  placeholder="ConfirmPassword"
                  type="ConfirmPassword" 
                  onChange={this.handleChange}
              />
              <Label for="exampleConfirmPassword">
                  Confirm Password
              </Label>
            </FormGroup>
            {' '}              
            <div className='divbtn'></div>
            <div className='divbtn'>
                <Button type='submit' className='btn' style={{background:'#080436',
                    color:'white',
                    borderColor:'#080436',
                    borderRadius:'35px',
                    width: '100px',
                    height:"50px",
                    fontSize: '20px',
                    fontFamily:"Roboto",
                }}>Sign up</Button>
        </div>
          </Form>
      )
    }
  }
  
export default SignUp



/*
        
        
        <div className='divbtn'>
            <Button type='submit' className='btn' style={{background:'#080436',
            color:'white',
            borderColor:'#080436',
            borderRadius:'35px',
            width: '100px',
            height:"50px",
            fontSize: '20px',
            fontFamily:"Roboto",
            }}>Sign in</Button>
        </div>
    </Form>            
        )
}

export default Sign_in_form;

/*
                <div className='buttonSign_in'><button className='buttonSign_in'>Sign in</button></div>
                <div className='divbtn'>
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
                </div>
            </form>    
        </div>
    
*/

