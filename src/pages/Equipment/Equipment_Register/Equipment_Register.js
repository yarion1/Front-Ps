import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {CardBody,CardHeader, Button,
  Form, FormGroup,Label,Input, Row, Col, Select} from 'reactstrap';
import Navbar from "../../../components/Navbar";
import { registerActionEquip } from "../../../store/actions";
import { CardData, Container, Item } from "../../SignUp/DadosCadastrais/StyledDadosCadastrais";
import {Equipment_RegisterForm,
        Button_Register_Send,
        Button_Register_Cancel,
        Equipment_Form} 
from "./StyledEquipment_Register";
import jwtDecode from "jwt-decode";

const Equipment_Register = () =>{  

  const [product_name, setProduct_name] = useState('');
  const [description, setDescription] = useState('');
  const [model_year, setModel_year] = useState('');
  const [label, setLabel] = useState('');
  const [price, setPrice] = useState('');
  const [price_unity, setPrice_unity] = useState('');
  const [qtd_sale, setQtd_sale] = useState(1);
  const [category_id, setCategory_id] = useState(['']);
  const [evaluation, setEvaluation] = useState(10);
  const [qtd_stars, setQtd_stars] = useState(5);
  const [model, setModel] = useState('');
   
  const [errorMessage, setError] = useState("")
  const [idcategorie, setIdcategorie] = useState(0)
  const dispatch = useDispatch()
 
  const navigate = useNavigate();
  
 //
  const jwtToken =  localStorage.getItem("x-access-token")
  const userData = jwtDecode(jwtToken)
  const id = userData.user_id;
  const [user, setUser] = useState([''])
  const [loading, setIsLoading] = useState(true);
   
  useEffect(() => {
        axios.get('http://localhost:5000/categories')
         .then(response=>{
            setCategory_id(response.data)
        }).catch(error=>{
            alert(error)
        })
        
      },[])
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

  const sendData = (event) => {
    event.preventDefault();

    const newEquipament = {
      product_name,
      description,
      model,
      model_year, 
      label, 
      price,
      price_unity,
      qtd_sale,
      qtd_stars,
      evaluation,
      category_id: idcategorie,
      users_id: user.id,
      users_name: user.name,
    }
    const validate = dispatch(registerActionEquip(newEquipament));
    validate.then(response => {
      navigate('/Rent');
    })
    .catch(error => setError(error.data.err))
    navigate('/Equipment_Register');
  }
    return(
        <>
        <Navbar/>
          <div style={{margin:'0 auto', marginLeft:"10%", right:"0"}}>
            <CardData 
             style={{borderTopColor: '#130A1D',
                    borderLeftColor: '#130A1D', 
                    borderRightColor: '#130A1D',
             }}>
              <CardHeader tag="h5" style={{background:'#130A1D', borderColor:'#130A1D', color:'#fff'}}>
                ANUNCIAR EQUIPAMENTO
              </CardHeader>
              <CardBody>
              <Form onSubmit={sendData}>
              <FormGroup style={{paddingLeft:'10px'}}>
                <Label>
                  Nome do equipamento
                </Label> 
                <Input
                  name="product_name"
                  type="text"
                  value={product_name}
                  onChange={e => setProduct_name(e.target.value)}
                />
                    <Label>
                      Descrição do equipamento
                    </Label>
                    <Input
                      name="description"
                      type="text"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
              </FormGroup>
              <FormGroup style={{paddingLeft:'10px'}}>
                <Container>
                   <Item>
                     <Label>
                      Ano
                   </Label>
                     <Input
                      name="model_year"
                      type="date"
                      value={model_year}
                      onChange={e => setModel_year(e.target.value)}
                   
                     />
                   </Item>
                   <Item>
                    <Label>
                      Etiqueta
                    </Label>
                    <Input
                      name="label"
                      type="text"
                      value={label}
                      onChange={e => setLabel(e.target.value)}
                      
                    />
                  </Item>
                  <Item>
                    <Label>
                      Preço
                    </Label>
                    <Input
                      name="price"
                      type="text"
                      prefix="R$"
                      value={price}
                      onChange={e => setPrice(e.target.value)}
                      
                    />
                    </Item>
                  <Item>
                    <Label>
                      Preço por unidade
                    </Label>
                    <Input
                      name="price_unity"
                      type="text"
                      prefix="R$"
                      value={price_unity}
                      onChange={e => setPrice_unity(e.target.value)}
                    />
                      
                  </Item>
                    
                
                </Container>
              </FormGroup>
              <FormGroup style={{paddingLeft:'10px'}}>
                  <Container>
                    <Item>
                      <Label for="exampleSelect">
                        Selecione a categoria desejada
                      </Label>
                      <Input onChange={e => setIdcategorie(e.target.value)} type='select'>
                            <option value={0}/>
                                     {category_id.map(item=>{
                                    return(
                                         <option  key={item.id}  value={item.id}>{item.title}</option>
                                    );
                                     })}
                                     </Input>
                    </Item>
                    <Item>
                    <Label>
                      Marca
                    </Label>
                    <Input
                      name="model"
                      type="text"
                      value={model}
                      onChange={e => setModel(e.target.value)}
                    />
                    </Item>
                  </Container>
                </FormGroup>
              <Button  style={{background:'#130A1D', borderColor: '#130A1D'}}>
                Anunciar
              </Button>
            </Form>
              </CardBody>
            </CardData>
          </div>
        </>
    )

}

export default Equipment_Register;