import React, {Component} from 'react';
import './styleduser_profile_infos.js';
import {Col,Label} from 'reactstrap';
import styled, {
    User_profiles_labels,
    User_profiles_titles
  } from './styleduser_profile_infos.js';
class User_profile_infos extends Component {
    
    render() {
      return (
          <User_profiles_labels>
              <User_profiles_titles>
                  Descrição:
              </User_profiles_titles>
              <Label for="Descrição">
                  Estudante de Ciência da Computação na Universidade Federal do Tocantins. 
              </Label>                   
              <User_profiles_titles>
                  Idade:
              </User_profiles_titles>              
              <Label for="Idade">
                  20
              </Label>
              <User_profiles_titles>
                  Email:
              </User_profiles_titles>              
              <Label for="Email">
                  arthur123@gmail.com
              </Label>
              <User_profiles_titles>
                  Profissão:
              </User_profiles_titles>
              <Label for="Profissão">
                  Programador
              </Label>
        </User_profiles_labels>
      )
    }
  }

  export default User_profile_infos