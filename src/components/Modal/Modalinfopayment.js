import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { LogoPag, Button, Caixa } from "./Styledmodalinfopayment";
import PropTypes from "prop-types";

const Modalinfopayment = ({ show, toggleShow }) => {
  return (
    <div>
      <Modal
        isOpen={show}
        toggle={() => {
          toggleShow();
        }}
      >
        <ModalHeader
          toggle={() => {
            toggleShow();
          }}
        >
          Aceitamos
        </ModalHeader>
        <ModalBody>
          <Caixa>
            <LogoPag src={require("../../assets/img/visa.png")} />
            <LogoPag src={require("../../assets/img/mastercard.png")} />
            <LogoPag src={require("../../assets/img/boleto.png")} />
            <LogoPag src={require("../../assets/img/americanexpress.png")} />
            <LogoPag src={require("../../assets/img/elo.png")} />
            <LogoPag src={require("../../assets/img/pix.png")} />
          </Caixa>
        </ModalBody>
        <ModalFooter>
          {" "}
          <Button
            onClick={() => {
              toggleShow();
            }}
          >
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

PropTypes.defaultProps = {
  show: false,
};

Modalinfopayment.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default Modalinfopayment;
