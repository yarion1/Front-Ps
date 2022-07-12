import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EquipmentDetail from './EquipmentDetail';
import styled, {H1, DivInfo} from './StyledEquipmentDetail';


const EquipamentDetaiInfo = () => {
    const [idproduct, setIdproduct] = useState(sessionStorage.getItem('produto'));
    const [product, setProduct] = useState(['']);
    const [loading, setIsLoading] = useState(true);

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
    return(
        <>
            <EquipmentDetail/>
             <DivInfo>
                 <H1>{product.description}</H1>
             </DivInfo>
        </>
    );
}

export default EquipamentDetaiInfo;