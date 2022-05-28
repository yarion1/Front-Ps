import React, {Component} from 'react';
import {Col,Label} from 'reactstrap';
import styled, {
    Worker_profile_container,
    Worker_profile_namelabel,
    Worker_profile_professionlabel,
    Worker_profile_phonenumberlabel,
    Worker_profile_photo,
    Worker_profile_namefield,
    Worker_profile_professionfield,
    Worker_profile_phonenumberfield,
    Worker_profile_descriptionfield,
    Worker_profile_descriptionlabel, 
    
  } from './styledworker_profile_infos.js';

  class Worker_profile_infos extends Component {

    render() {
      return (
         <Worker_profile_container>
           <Worker_profile_photo></Worker_profile_photo>
          <Worker_profile_namelabel>Nome</Worker_profile_namelabel>
          <Worker_profile_namefield>123</Worker_profile_namefield>
          <Worker_profile_professionlabel>Profissão</Worker_profile_professionlabel>
          <Worker_profile_professionfield>123</Worker_profile_professionfield>
          <Worker_profile_phonenumberlabel>Telefone</Worker_profile_phonenumberlabel>
          <Worker_profile_phonenumberfield>123</Worker_profile_phonenumberfield>
          <Worker_profile_descriptionlabel>Descrição</Worker_profile_descriptionlabel>
          <Worker_profile_descriptionfield>1234354</Worker_profile_descriptionfield>   
        </Worker_profile_container>
      )
    }
  }

  export default Worker_profile_infos