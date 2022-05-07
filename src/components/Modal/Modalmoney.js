import React from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader
} from 'reactstrap';

import PropTypes from 'prop-types';

const Modalmoney = ({show, toggleShow}) => {

    return(
        <div isOpen={show} toggle={() => {toggleShow()}}>
            <Modal>
                <ModalHeader>Salve</ModalHeader>
                <ModalBody>buiwiogiowqnhionklnhknaihihoseioha</ModalBody>
                <ModalFooter></ModalFooter>
            </Modal>
        </div>
    )

}

PropTypes.defaultProps = {
    show: false
  }
  
  Modalmoney.propTypes = {
    show: PropTypes.bool.isRequired,
    toggleShow: PropTypes.func.isRequired
  }

export default Modalmoney;