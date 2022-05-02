import React from 'react'
import {
    Cardbuy,
    Cardbuyinfo
} from './Styledmodalbuy'
import {Input} from 'reactstrap';

function Modalpaymentcartao ({closeModalpaymentcartao}){
    return(
        <Cardbuy>
            <Cardbuyinfo>
            Nome do Titular do Cartão:
            <Input 
            style={{width: '80%', marginRight: '-10%'}}
            name="cardownername"
            placeholder="Ex: Frabrício de Faguntes"
            type="text">
            </Input>
            <br/>
            CVV:
            <Input 
            style={{width: '80%', marginRight: '-10%'}}
            name="CVVcard"
            placeholder="Ex: 123"
            type="number">
            </Input>
            <br/>
            Número do Cartão:
            <Input 
            style={{width: '80%', marginRight: '-10%'}}
            name="cardnumber"
            placeholder="Ex: 1234 5678 9876 5432"
            type="number">
            </Input>
            <br/>
            Data de Expiração:
            <Input 
            style={{width: '80%', marginRight: '-10%'}}
            name="expiration"
            type="date">
            </Input>
            </Cardbuyinfo>
        </Cardbuy>
    )
}

export default Modalpaymentcartao