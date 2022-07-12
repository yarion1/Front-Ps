import React from "react";
import Navbar from "../../components/Navbar/index";

import "../..";
import Worker_profile_infos from "../../components/Worker_profile_infos/workerprofileinfos.js";

import { Worker_profile_button } from "./styledworkerprofile.js";

function Worker_profile() {
  return (
    <div>
      <Navbar />
      <Worker_profile_button>Seja um profissional</Worker_profile_button>
      <Worker_profile_infos />
    </div>
  );
}

export default Worker_profile;
