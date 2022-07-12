import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import EquipmentSecurity from "../../pages/Equipment/EquipmentSecurity/EquipmentSecurity";
import { ButtonDetails, Divdetails } from "./StyledProductInspect";
import EquipamentDetaiInfo from "../../pages/Equipment/EquipmentDetail/EquipamentDetailInfo";
import Navbar from "../Navbar/index";

const ProductInspect = () => {
  const [selectedPage, setSelectedPage] = useState("detail");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedPage !== location.pathname) {
      navigate(`/product-inspect/${selectedPage}`);
    }
  }, [location.pathname, navigate, selectedPage]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/detail" element={<EquipamentDetaiInfo />} />
        <Route path="/security" element={<EquipmentSecurity />} />
      </Routes>
      <Divdetails>
        <ButtonDetails
          onClick={() => {
            setSelectedPage("detail");
          }}
          className={`${selectedPage === "detail" ? "selectedPage" : ""} `}
        >
          DETALHES
        </ButtonDetails>
        <ButtonDetails
          onClick={() => {
            setSelectedPage("security");
          }}
          className={`${selectedPage === "security" ? "selectedPage" : ""}`}
        >
          SEGURANÇA
        </ButtonDetails>
      </Divdetails>
    </>
  );
};

export default ProductInspect;
