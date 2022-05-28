import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import Navbar from "../../components/Navbar/index";

import '../..';
import Worker_profile_infos from '../../components/Worker_profile_infos/worker_profile_infos.js';

import styled, {
  Worker_profile_button, 
  
} from './styledworker_profile.js';


 function Worker_profile () {
    return(
      <div>
        <Navbar/>
        <Worker_profile_button>Seja um profissional</Worker_profile_button>    
        <Worker_profile_infos/>
      </div>

    ) 
  }

export default Worker_profile;