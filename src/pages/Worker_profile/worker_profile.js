import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import {Form, FormGroup,Input,Label,Button} from 'reactstrap';
import NavbarPage from "../../components/Navbar/index";

import '../..';
import Worker_profile_infos from '../../components/Worker_profile_infos/worker_profile_infos.js';




 function Worker_profile () {
    return(
      <div>     
        <Worker_profile_infos/>
      </div>

    ) 
  }

export default Worker_profile;