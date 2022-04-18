import React, {useState} from 'react';
import style, {Globalpage} from '../../../assets/styles/auth/authstyled';
import ModalPayment from '../../../components/Modal/Modalpayment';
import Modalinfopayment from '../../../components/Modal/Modalinfopayment';
import { 
    Carditens, 
    Iitleitem, 
    Carddetails, 
    Infopreco,
    Preco,
    Meiospag,
    CardAviso,
    Text,
    Text2,
    Info,
    Iconverified,
    Buttonconfirm,
    DivImage,
    Divcoluna,
    Imagemprincipal,
    ButtonDetails,
} from './StyledEquipmentDetail';

import ReactImageZoom from 'react-image-zoom';

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

    
    const imgProps = {width: 450, zoomHeight: 450, zoomWidth: 450, img: imagePreview, zoomPosition: 'original'}; 

    const toggle = () => setShowModal(!showModal);
    const toggleinfo = () => setShowModalinfo(!showModalinfo);
    

    return (
     <>
        <Globalpage>
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
                            {/* <img
                                src={imagePreview}
                                alt='Product Image'
                                style={{width: '100%', heigth: 'auto', objectFit: 'cover'}}
                            /> */}
                        </Imagemprincipal>
                    <div style={{width: '60%', marginLeft: '56%'}}>
                    <Carddetails>
                        <Iitleitem>
                        {equipament.title}
                        </Iitleitem>
                            <Infopreco>
                                <Preco>R$ {equipament.price}</Preco>
                            </Infopreco>
                            <Meiospag onClick={() => {toggleinfo()}}>Ver os meios de pagamento</Meiospag>
                        <CardAviso>
                            <Iconverified/>
                            <Text>Para segurança</Text>
                            <Text2>Realize pagamentos verificando antecipadamente as informações do produto.</Text2>
                            <Info>Veja mais informações aqui.</Info>
                        </CardAviso>
                            <Buttonconfirm onClick={() => {toggle()}}>Alugar agora</Buttonconfirm>
                    </Carddetails>
                    </div>
            </Carditens>
        </Globalpage>
        <Modalinfopayment show={showModalinfo} toggleShow={() => {toggleinfo()}}/>
        <ModalPayment show={showModal} toggleShow={() => {toggle()}} />
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