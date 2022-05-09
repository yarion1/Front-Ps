
import React, { useState } from 'react';
import {Input} from 'reactstrap';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader
} from 'reactstrap';


import Modalmoney from './Modalmoney';
import Modalpix from './Modalpix';
import Modalpaymentcartao from './Modalpaymentcartao';

import {
  Infoprice,
  Dayrented,
  Pagamentmode
} from "./Styledmodalpayment"

import PropTypes from 'prop-types';

const ModalPayment = ({show, toggleShow}) => {
    
    return(
        <div>
            <Modal isOpen={show} toggle={() => {toggleShow()}}>
                <ModalHeader toggle={() => {toggleShow()}}>
                    Confirmar Aluguel
                </ModalHeader>
                <ModalBody>
                   Aqui mostrará a confirmação do aluguel/contrato.
                </ModalBody>
                <ModalFooter>
                    <Button
                      style={{background:'#080436', border:'#080436', color:'#fff'}}
                      onClick={() => {toggleShow()}}>

                     Alugar
                    </Button>
                    {' '}
                    <Button onClick={() => {toggleShow()}}>
                      Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

PropTypes.defaultProps = {
  show: false
}

ModalPayment.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired
}

export default ModalPayment;