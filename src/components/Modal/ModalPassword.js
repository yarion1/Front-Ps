import PropTypes from "prop-types";
import {
  Labelog,
  Salvar,
  FormGrouplog,
  Inputlog,
  ItemName,
} from "./styledModalPassword";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalSenha = ({ show, toggleShow }) => {
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
          Alterar senha
        </ModalHeader>
        <ModalBody>
          <ItemName>Digite a senha atual</ItemName>
          <FormGrouplog floating>
            <Inputlog
              style={{ borderRadius: "15px", height: "20%" }}
              id="examplePassword"
              name="password"
              type="password"
            />
            <Labelog for="examplePassword">Password</Labelog>
          </FormGrouplog>
          <hr />
          <ItemName>Digite a nova senha</ItemName>
          <FormGrouplog floating>
            <Inputlog
              style={{ borderRadius: "15px", height: "20%" }}
              id="examplePassword"
              name="password"
              type="password"
            />
            <Labelog for="examplePassword">Password</Labelog>
          </FormGrouplog>
          <ItemName>Confirme a nova senha</ItemName>
          <FormGrouplog floating>
            <Inputlog
              style={{ borderRadius: "15px", height: "20%" }}
              id="examplePassword"
              name="password"
              type="password"
            />
            <Labelog for="examplePassword" />
          </FormGrouplog>
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

ModalSenha.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default ModalSenha;
