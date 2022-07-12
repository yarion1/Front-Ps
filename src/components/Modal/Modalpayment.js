
import React, { useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RegisterRentEquip } from "../../store/actions";

const ModalPayment = ({show, toggleShow}) => {
  const [loading, setIsLoading] = useState(true);
  const [product, setProduct] = useState(['']);
      const [errorMessage, setError] = useState("")
       const [idproduct, setIdproduct] = useState(sessionStorage.getItem('produto'));

  useEffect(()=>{
      if(loading){
        setIsLoading(true)
        axios.get(`http://localhost:5000/products/${idproduct}`)
        .then(response=>{
          setProduct(response.data)
          setIsLoading(false)
      }).catch(error=>{
          alert(error)
      })
      }
    },[])
   const navigate = useNavigate();
   const [isloading, setIsloading] = useState(false);
   const jwtToken =  localStorage.getItem("x-access-token")
   const userData = jwtDecode(jwtToken)
   const id = userData.user_id;
   const [user, setUser] = useState([''])

   useEffect(()=>{
    if(loading){
      setIsLoading(true)
      axios.get(`http://localhost:5000/users/${id}`)
      .then(response=>{
        setUser(response.data)
        setIsLoading(false)
    }).catch(error=>{
        alert(error)
    })
    }
  },[])

   const dispatch = useDispatch();

   const send = (event) =>{
      event.preventDefault();
        
      const Rent = {
          name_equipament: product.product_name,
          price: product.price,
          description: product.description,
          product_id: product.id,
          users_name: user.name,
          phone: user.phone_number,
          users_id:user.id,
      }
        const validate = dispatch(RegisterRentEquip(Rent))
        validate.then(response => {
          navigate('/MyRent');
        })
        .catch(error => setError(error.data.err))
        navigate('/product-inspect/*');
      }
  
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
                      onClick={send}>

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