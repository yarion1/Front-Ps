import React, { Component } from "react";
import {
  User_profile_container,
  User_profile_namelabel,
  User_profile_professionlabel,
  User_profile_phonenumberlabel,
  User_profile_photo,
  User_profile_namefield,
  User_profile_emailfield,
  User_profile_phonenumberfield,
  User_profile_descriptionfield,
  User_profile_descriptionlabel,
} from "./styleduserprofileinfos.js";

class Worker_profile_infos extends Component {
  render() {
    return (
      <User_profile_container>
        <User_profile_photo></User_profile_photo>
        <User_profile_namelabel>Nome</User_profile_namelabel>
        <User_profile_namefield>João Pedro da Silva</User_profile_namefield>
        <User_profile_professionlabel>e-mail</User_profile_professionlabel>
        <User_profile_emailfield>
          joaopedro123@gmail.com
        </User_profile_emailfield>
        <User_profile_phonenumberlabel>Telefone</User_profile_phonenumberlabel>
        <User_profile_phonenumberfield>
          459321931293219
        </User_profile_phonenumberfield>
        <User_profile_descriptionlabel>Descrição</User_profile_descriptionlabel>
        <User_profile_descriptionfield></User_profile_descriptionfield>
      </User_profile_container>
    );
  }
}
export default Worker_profile_infos;
