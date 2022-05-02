import React from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader
} from 'reactstrap';

import PropTypes from 'prop-types';

const Modalinfopayment = ({show, toggleShow}) => {
    
    return(
        <div>
            <Modal isOpen={show} toggle={() => {toggleShow()}}>
                <ModalHeader toggle={() => {toggleShow()}}>
                    Meios de Pagamento
                </ModalHeader>
                <ModalBody>
                  Aqui estará contida todas as formas de pagamento pro usuário
                </ModalBody>
                <ModalFooter>
                    {' '}
                    <Button onClick={() => {toggleShow()}}>
                      Fechar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

PropTypes.defaultProps = {
  show: false
}

Modalinfopayment.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired
}

export default Modalinfopayment;