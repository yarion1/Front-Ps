import styled from "styled-components";
import { Button } from "reactstrap";

export const Buttoncad = styled(Button)`
  left: 0%;
  right: 0%;
  margin-top: 24%;
  background: #2166c1;
  border-radius: 10px;
  position: absolute;
  transform: scale(1);
  width: 200%;

  hover {
    transition: all ease 0.3s;
    transform: scale(0.9);
  }

  @media (min-width: 1400px) {
    top: 75%;
  }
  @media (max-width: 1400px) {
    top: 85%;
    margin-top: 15%;
  }

  @media (max-width: 950px) {
    width: 100%;
    top: 10%;
    left: 40%;
  }

  @media (max-width: 600px) {
    width: 70%;
    left: 10%;
  }
`;

export const Divbuttoncad = styled.div`
  @media (max-width: 950px) {
    position: absolute;
    right: 40%;
    width: 110%;
    top: 80%;
  }
`;
