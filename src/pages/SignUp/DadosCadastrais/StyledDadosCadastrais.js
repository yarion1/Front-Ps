import styled from "styled-components";
import { Card } from "reactstrap";

export const CardData = styled(Card)`
  display: flex;
  width: 80vw;
  top: 2vh;
  border-radius: 10px;
  border: none;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  flex: 1 1 150px;
  padding-right: 2%;
`;
