import React from 'react'
import {
    Cardbuy,
    Cardbuyinfo
} from './Styledmodalbuy'
import {Input} from 'reactstrap';

function Modalpix ({closeModalpix}){
    return(
        <Cardbuy>
            <Cardbuyinfo>
            CPF/CNPJ
            <Input 
            style={{width: '80%', marginRight: '-10%'}}
            name="pixnumber"
            placeholder="Ex: 851.945.828-XX"
            type="number">

            </Input>
            </Cardbuyinfo>
        </Cardbuy>
    )
}

export default Modalpix 