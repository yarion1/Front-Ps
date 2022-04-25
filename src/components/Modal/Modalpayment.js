import React from 'react';
import{
  Valor
} from './StyledModal'
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
  CardBody
} from 'reactstrap';

import PropTypes from 'prop-types';
import { CardAviso } from '../../pages/Equipment/EquipmentDetail/StyledEquipmentDetail';

const ModalPayment = ({show, toggleShow}) => {
    
    return(
        <div>
            <Modal isOpen={show} toggle={() => {toggleShow()}}>
                <ModalHeader toggle={() => {toggleShow()}}>
                    Confirmar Aluguel
                </ModalHeader>
                <ModalBody>
                   <CardBody>
                    <Valor>R$ 307 por dia</Valor>
                    <br/>
                    <div>
                      <form>
                      Por quantos dias deseja alugar esse equipamento?
                      <input type="number" class="form-control" ></input>
                      </form>
                    </div>
                   </CardBody>
                </ModalBody>
                <ModalFooter>
                    <Button
                      style={{background:'#080436', border:'#080436', color:'#fff'}}
                      onClick={() => {console.log("ok")}}
                    >
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