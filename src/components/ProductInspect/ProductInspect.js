import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import EquipmentDetail from '../../pages/Equipment/EquipmentDetail/EquipmentDetail';
import EquipmentSecurity from '../../pages/Equipment/EquipmentSecurity/EquipmentSecurity';
import {ButtonDetails} from './StyledProductInspect';
import EquipamentDetaiInfo from '../../pages/Equipment/EquipmentDetail/EquipamentDetailInfo';
import  Navbar  from '../Navbar/index';


const ProductInspect = () => {

    const [selectedPage, setSelectedPage] = useState('detail');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if(selectedPage !== location.pathname) {
            navigate(`/product-inspect/${selectedPage}`)
        }
    }, [selectedPage])
    
    return(
        <>
        <Navbar/>
            <Routes>
                <Route path="/detail" element={<EquipamentDetaiInfo />} />
                <Route path="/security" element={<EquipmentSecurity />} />

            </Routes>
            <div style={{display: 'inline-block', position:'relative', marginTop:'10%', marginLeft:'15%', width:'100%'}}>
            <ButtonDetails 
                onClick={() => {setSelectedPage('detail')}}
                className={`${selectedPage === 'detail' 
                    ? 'selectedPage' 
                    : ''} `}>
                        DETALHES
            </ButtonDetails>
            <ButtonDetails
                onClick={() => {setSelectedPage('security')}}
                className={`${selectedPage === 'security'
                    ? 'selectedPage'
                    : ''}`}>SEGURANÇA
            </ButtonDetails>
            </div>
        </>
    );
};

export default ProductInspect;