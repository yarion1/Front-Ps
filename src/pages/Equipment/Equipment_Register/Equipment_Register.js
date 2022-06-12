import React from "react";
import Navbar from "../../../components/Navbar";
import {Equipment_RegisterForm,
        Button_Register_Send,
        Button_Register_Cancel,
        Equipment_Form} 
from "./StyledEquipment_Register";

const Equipment_Register = () =>{ 
    return(
        <>
        <Navbar/>
          <Equipment_RegisterForm>
              <Equipment_Form>
                <legend><b>Formulário de Equipamentos</b></legend>
                <br/>
                <br/>
                <label for="optionequipment">Que tipo de equipamento deseja anunciar?</label>
                <br/>
                <select id="optionequipment">
                    <option value="MaquinaPesada">Máquina Pesada</option>
                    <option value="Britadeira">Britadeira</option>
                    <option value="Serra">Serra</option>
                    <option value="Maquita">Maquita</option>
                </select>
                <br/>
                <br/>
                <label>Qual o valor que deseja definir do aluguel? (por hora)</label>
                <br/>
                R$:<input type="number"></input>
                <br/>
                <br/>
                <label for="equipmentquali">Qual o estado de qualidade do equipamento?</label>
                <br/>
                <select id="equipmentquali">
                    <option value="Otimo">Ótimo</option>
                    <option value="Bom">Bom</option>
                    <option value="Ruim">Ruim</option>
                </select>
                <br/>
                <br/>
                Envie uma foto para sabermos que é você: 
                <br/>
                <input type="file" name="foto" id="foto"/>
              </Equipment_Form>
              <Button_Register_Send>
                  Enviar
              </Button_Register_Send>
              <Button_Register_Cancel>
                  Cancelar
              </Button_Register_Cancel>
          </Equipment_RegisterForm>
        </>
    )

}

export default Equipment_Register;