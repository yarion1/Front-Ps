import React, {useState} from 'react';
import ModalPayment from '../../../components/Modal/Modalpayment';
import Modalinfopayment from '../../../components/Modal/Modalinfopayment';
import { useNavigate} from 'react-router-dom';
import ModalAv from '../../../components/Modal/ModalAv';
import { 
    Divpage,
    Carditens, 
    Iitleitem, 
    Carddetails, 
    Infopreco,
    Preco,
    Meiospag,
    CardAviso,
    Text,
    Text2,
    Iconverified,
    Buttonconfirm,
    DivImage,
    Divcoluna,
    Imagemprincipal,
    Avalie
} from './StyledEquipmentDetail';

import ReactImageZoom from 'react-image-zoom';
import EquipmentSecurity from '../EquipmentSecurity/EquipmentSecurity';

function EquipmentDetail (/* {equipament} */) {
    const equipament = {
        id: '1',
        title: 'Escavadeira Rc completa',
        price: '307,00',
        images: ['https://www.deere.com.br/assets/images/region-3/products/excavators/180g-lc/escavadeira_180g_estudio_1_large_f5bf43c97d57e86b8d13d816cde23b1667ee3117.jpg', 'https://www.deere.com.br/assets/images/region-3/products/excavators/180g-lc/escavadeira_180g_overview_large_3973913922a290152a5af17e32508cc7fedadba3.jpg', 'https://www.deere.com.br/assets/images/region-3/products/excavators/180g-lc/escavadeira_180g_estudio_2_large_57337f7748a0d620fb2a3962b10fd3edf315e641.jpg', 'https://www.deere.com.br/assets/images/region-3/products/excavators/180g-lc/escavadeira_180g_obra_1_large_6a3e82f5b514240c74c9801937071f91707f0aa9.jpg']
    }

    const [imagePreview, setImagePreview] = useState(equipament.images[0]);
    const [showModal, setShowModal]= useState(false);
    const [showModalinfo, setShowModalinfo]= useState(false);
    const [showModalAv, setShowModalAv]= useState(false);

    
    const imgProps = {width: 450, zoomHeight: 450, zoomWidth: 450, img: imagePreview, zoomPosition: 'original'}; 

    const toggle = () => setShowModal(!showModal);
    const toggleinfo = () => setShowModalinfo(!showModalinfo);
    const toggleAv = () => setShowModalAv(!showModalAv);

    return (
        <>
        <Divpage>
            <Carditens>
                <Divcoluna>
                        {equipament.images.map((item, index) => (
                            <DivImage
                                key={index}
                                onMouseMove={() => {setImagePreview(item)}}
                                onClick={() => {setImagePreview(item)}}
                                className={`${(String(item) === String(imagePreview))
                                    ? "selected"
                                    : "notSelected" }`}>
                                <img src={item} alt={`Product Image ${index}`}  style={{width: '90%'}} />
                            </DivImage>
                        ))}
                </Divcoluna>
                <Imagemprincipal>
                    <ReactImageZoom {...imgProps} />
                </Imagemprincipal>
            </Carditens>
            <Carddetails>
              <Iitleitem>
                    {equipament.title}
                    </Iitleitem>
                        <Infopreco>
                            <Preco>R$ {equipament.price}</Preco>
                        </Infopreco>
                        <Meiospag onClick={() => {toggleinfo()}}>Ver os meios de pagamento</Meiospag>
                    <CardAviso>
                        <Iconverified style={{top:'3em', maxWidth:'20%', Maxheight:'25%'}}/>
                        <Text>Para segurança</Text>
                        <Text2>Realize pagamentos verificando antecipadamente as informações do produto.</Text2>
                    </CardAviso>
                        <Buttonconfirm onClick={() => {toggle()}}>Alugar agora</Buttonconfirm>
                        <Avalie onClick={() => {toggleAv()}}>Avalie o produto</Avalie>
                </Carddetails>
        </Divpage>
        <Modalinfopayment show={showModalinfo} toggleShow={() => {toggleinfo()}}/>
        <ModalPayment show={showModal} toggleShow={() => {toggle()}} />
        <ModalAv show={showModalAv} toggleShow={() => {toggleAv()}} />
     </>
    );
}

/* Equipamento.defaultProps = {
    equipament: {}
}

Equipamento.propTypes = {
    equipament: PropTypes.object.isRequired,
}
 */
export default EquipmentDetail;