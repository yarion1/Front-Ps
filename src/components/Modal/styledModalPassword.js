import { Label, Input, FormGroup } from "reactstrap";
import styled from "styled-components";

export const Labelog = styled(Label)`
  color: rgba(255, 255, 255, 0.5);
  font-size: 17px;
  line-height: 20px;

  @media (max-width: 600px) {
    margin-left: 5px;
  }
`;
export const Inputlog = styled(Input)`
  padding-bottom: 2px;
  margin-bottom: 10px;
  border-bottom: #56456b;
  background: #eeeeee;
  font-size: 15px;
  width: 100%;
  padding-left: 20px;
`;

export const FormGrouplog = styled(FormGroup)`
  @media (max-width: 950px) {
    right: 50%;
  }
`;

export const ItemName = styled.h3`
  font-family: "Roboto";
`;

export const Salvar = styled.button`
  font-family: "Roboto";
  border: none;
  color: #ffff;
  border-radius: 10px;
  border-color: #2166c1;
  background: #080436;
  transition: 0.3s;
  width: 18%;
  height: 32px;

  :hover {
    background: #618dce;
    border: none;
    color: #fff;
  }
`;
