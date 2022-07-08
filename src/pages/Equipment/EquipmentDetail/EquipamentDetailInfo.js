import React from "react";
import EquipmentDetail from "./EquipmentDetail";
import { H1, DivInfo } from "./StyledEquipmentDetail";

const EquipamentDetaiInfo = () => {
  return (
    <>
      <EquipmentDetail />
      <DivInfo>
        <H1>Detalhes sobre o produto.</H1>
      </DivInfo>
    </>
  );
};

export default EquipamentDetaiInfo;
