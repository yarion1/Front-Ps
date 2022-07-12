import PropTypes from "prop-types";
import { Desc, Salvar } from "./styledModalPrest";
import SignUpF from "../../pages/upload/up";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalPrest = ({ show, toggleShow }) => {
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
          Dados do prestador de serviços
        </ModalHeader>
        <ModalBody>
          <Desc placeholder="Exemplo: Me chamo Arthur Fernandes, trabalho como operador de  pequeno a médio grande porte, com exeperiência real em obras segue abaixo curriculo, CNH e Certificados" />
          <hr />
          <SignUpF />
        </ModalBody>
        <ModalFooter>
          {" "}
          <Salvar
            onClick={() => {
              toggleShow();
            }}
          >
            Salvar
          </Salvar>
        </ModalFooter>
      </Modal>
    </div>
  );
};

PropTypes.defaultProps = {
  show: false,
};

ModalPrest.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default ModalPrest;
