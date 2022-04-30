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

    const [openModalmoney, setOpenModalmoney] = useState(false)
    const [openModalpix, setOpenModalpix] = useState(false)
    const [openModalpaymentcartao, setOpenModalpaymentcartao] = useState(false)
    
    return(
        <div>
            <Modal isOpen={show} toggle={() => {toggleShow()}}>
                <ModalHeader toggle={() => {toggleShow()}}>
                    Confirmar Aluguel
                </ModalHeader>
                <ModalBody>
                   <Infoprice>R$ 307,00</Infoprice>                   
                    <Dayrented>
                    Por quantos dias deseja alugar esse equipamento?
                    <Input
                            style={{width: '80%'}}
                            name="rented"
                            placeholder="Ex: 10, 20, 15, 09"
                            type="number"
                            min={1}
                        />
                    </Dayrented>
                    <br/>
                    <div>Selecione a forma de pagamento:</div>
                    <Pagamentmode onClick={() => setOpenModalmoney(true) & setOpenModalpix(false) &setOpenModalpaymentcartao(false)}>Dinheiro</Pagamentmode>
                    <Pagamentmode onClick={() => setOpenModalmoney(false) & setOpenModalpix(true) &setOpenModalpaymentcartao(false)}>Pix</Pagamentmode>
                    <Pagamentmode onClick={() => setOpenModalmoney(false) & setOpenModalpix(false) & setOpenModalpaymentcartao(true)}>Cartão</Pagamentmode>

                    {openModalmoney && <Modalmoney closeModalmoney={setOpenModalmoney}/>}
                    {openModalpix && <Modalpix closeModalpix={setOpenModalpix}/>}
                    {openModalpaymentcartao && <Modalpaymentcartao closeModalpaymentcartao={setOpenModalpaymentcartao}/>}

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