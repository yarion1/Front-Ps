import StarRating from '../../assets/StarRating/StarRating'
import PropTypes from 'prop-types'
import {Desc, Salvar} from "./styledModalPrest"

import 
{ Modal,
ModalBody,
ModalFooter,
Button,
ModalHeader}
from 'reactstrap'
 
const ModalPrest= ({show, toggleShow})=> {
  return (
    <div>
      <Modal isOpen={show} toggle={() => {toggleShow()}}>
                <ModalHeader toggle={() => {toggleShow()}}>
                    Dados do trabalhador
                </ModalHeader>
                <ModalBody>
                  <Desc placeholder="Exemplo: Me chamo Arthur Fernandes, trabalho como operador de  pequeno a médio grande porte, com exeperiência real em obras segue abaixo curriculo, CNH e Certificados"/>

                </ModalBody>
                <ModalFooter>
                    {' '}
                    <Salvar onClick={() => {toggleShow()}}>Salvar</Salvar> 
                </ModalFooter>
            </Modal>
      </div>
  );
}

PropTypes.defaultProps = {
  show: false
}

ModalPrest.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired
}

export default ModalPrest;
