import React from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader
} from 'reactstrap';

import PropTypes from 'prop-types';

const Modalpix = ({show, toggleShow}) => {

    return(
        <div isOpen={show} toggle={() => {toggleShow()}}>
            abbfuiabuiuigasg
        </div>
    )

}

PropTypes.defaultProps = {
    show: false
  }
  
  Modalpix.propTypes = {
    show: PropTypes.bool.isRequired,
    toggleShow: PropTypes.func.isRequired
  }

export default Modalpix;