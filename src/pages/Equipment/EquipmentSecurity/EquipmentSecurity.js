import React from "react";
import EquipmentDetail from "../EquipmentDetail/EquipmentDetail";
import { H1, DivInfo } from "../EquipmentDetail/StyledEquipmentDetail";

const EquipmentSecurity = () => {
  return (
    <>
      <EquipmentDetail />
      <DivInfo>
        <H1>Avisos de segurança sobre o equipamento.</H1>
      </DivInfo>
    </>
  );
};

export default EquipmentSecurity;
