import StarRating from "../../assets/StarRating/StarRating";
import PropTypes from "prop-types";
import { Coment, Avaliar } from "./StyledModalAv";

import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalAv = ({ show, toggleShow }) => {
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
          Avalie
        </ModalHeader>
        <ModalBody>
          <h1>Escavadeira Rc completa</h1>
          <img
            className="image"
            src={require("../../assets/img/trator.jpeg")}
            alt=""
          />
          <Coment placeholder="Deixe seu comentario" />
          <StarRating />
        </ModalBody>
        <ModalFooter>
          {" "}
          <Avaliar
            onClick={() => {
              toggleShow();
            }}
          >
            Avaliar
          </Avaliar>
        </ModalFooter>
      </Modal>
    </div>
  );
};

PropTypes.defaultProps = {
  show: false,
};

ModalAv.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
};

export default ModalAv;
