import React, {useState} from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader
} from 'reactstrap';

import PropTypes from 'prop-types';
import {Buttonconfirmbuy } from '../../pages/Equipment/EquipmentDetail/StyledEquipmentDetail';
import Modalmoney from './Modalmoney';
import Modalpix from './Modalpix';

const Modalinfopayment = ({show, toggleShow}) => {
  
  const [showModalmoney, setShowModalmoney]= useState(false);
  const togglemoney = () => setShowModalmoney(!showModalmoney);

  const [showModalpix, setShowModalpix]= useState(false);
  const togglepix = () => setShowModalpix(!showModalmoney);

  const [openModalcartao, setOpenModalcartao] = useState(false)

  return(
    <>
        <div>
            <Modal isOpen={show} toggle={() => {toggleShow()}}>
                <ModalHeader toggle={() => {toggleShow()}}>
                    Meios de Pagamento
                </ModalHeader>
                <ModalBody>
                  <Buttonconfirmbuy onClick={()=>{togglemoney()}}>Dinheiro</Buttonconfirmbuy>
                  <Buttonconfirmbuy onClick={()=>{togglepix()}}>Pix</Buttonconfirmbuy>
                  <Modalpix show={showModalpix} toggleShow={() => {togglepix()}}></Modalpix>
                  <Buttonconfirmbuy>Cartão</Buttonconfirmbuy>

                </ModalBody>
                <ModalFooter>
                    {' '}
                    <Button onClick={() => {toggleShow()}}>
                      Fechar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
        <Modalmoney show={showModalmoney} toggleShow={() => {togglemoney()}}/>
      </>
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