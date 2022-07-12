import styled from "styled-components";
import "../../../assets/styles/fonts/index.css";
import { Card, CardBody } from "reactstrap";
import { GoVerified } from "react-icons/go";

export const Divpage = styled.div`
  position: relative;
  margin: 0 auto;
  padding-left: 20%;
  display: flex;
  flex-direction: row;
  height: 75vh;
  top: 9em;
  left: 0;
  right: 0;

  @media (max-width: 960px) {
    flex-direction: column;
    padding-left: 5%;
  }
  @media (max-height: 610px) {
    height: 90vh;
  }
`;

export const Carditens = styled(Card)`
  box-sizing: border-box;
  border-radius: 10px;
  margin-right: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  width: 50%;

  @media (max-width: 960px) {
    width: 96%;
  }

  li {
    display: inline-block;
    margin-right: 35px;
  }
`;

export const DivImage = styled.div`
  -webkit-box-align: center;
  align-items: center;
  padding-top: 10px;
  padding-left: 5px;
  -webkit-box-pack: center;
  justify-content: center;
  width: 75px;
  height: 66px;
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 10px;
  border: 1px solid rgb(204, 204, 204);
  &.selected {
    border: 1px solid #080436;
  }
  img {
    object-fit: contain;
  }
`;

export const Divcoluna = styled.div`
  display: flex;
  padding-left: 5%;
  flex-grow: 3;
  margin-top: 2vh;
  height: 10vh;
  -webkit-box-align: center;
  align-items: center;
  width: 50vh;

  @media (max-width: 605px) {
    display: none;
  }
`;

export const Iitleitem = styled(CardBody)`
  font-family: "Nunito Sans";
  font-style: normal;
  font-size: 2vw;
  overflow: hidden;
  line-height: 34px;
  padding-left: 21px;
  flex: 0 0 auto;
  color: #000000;
  @media (max-width: 960px) {
    font-size: 30px;
  }
`;

export const Carddetails = styled(Card)`
  display: flex;
  position: relative;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: rgb(255, 255, 255);
  width: 30%;

  @media (max-width: 960px) {
    width: 96%;
  }
`;

export const Infopreco = styled.div`
  position: relative;
  display: flex;
  width: 42%;
  height: 50px;
  top: 1rem;
  border-radius: 0px 50px 50px 0px;
  background: #2166c1;
  text-align: center;
  padding-left: 0.5em;
  padding-top: 0.9rem;

  @media (max-width: 960px) {
    max-width: 18%;
    height: 70px;
    padding-top: 1.3rem;
  }
`;

export const Preco = styled.h2`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.7vw;
  text-align: center;
  color: #ffffff;

  @media (max-width: 960px) {
    font-size: 2.7vw;
  }
`;

export const Meiospag = styled.button`
  position: relative;
  display: flex;
  width: 200px;
  height: 39px;
  left: 25px;
  top: 1.9rem;
  font-family: "Nunito Sans";
  font-style: normal;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #3483fa;
  border: none;
  background: none;
  text-decoration: underline;
  transition: 0.2s;

  :hover {
    color: #52afcc;
  }
`;

export const CardAviso = styled(Card)`
  position: relative;
  max-width: 80%;
  height: 25%;
  top: 2rem;
  margin-bottom: 1.7em;
  left: 2em;
  right: 0;
  background: rgba(196, 196, 196, 0.07);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  border-radius: 7px;

  @media (max-width: 960px) {
    max-width: 40%;
    height: 35%;
    left: 55%;
    top: -7.5rem;
  }
`;

export const Text = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9vw;
  line-height: 21px;
  padding-left: 80px;
  padding-top: 15px;
  color: #050505;

  @media (max-width: 960px) {
    font-size: 2vw;
    padding-left: 4em;
  }
`;

export const Text2 = styled(Text)`
  font-size: 0.8vw;
  padding-top: 10px;
  color: rgba(5, 5, 5, 0.61);
  h2 {
    line-height: 14px;
  }
  @media (max-width: 960px) {
    font-size: 1.5vw;
    padding-top: 1px;
    margin-left: 1.5em;
  }
`;

export const Iconverified = styled(GoVerified)`
  position: absolute;
  color: #56ac21;
  width: 80px;
  height: 50px;
  top: 50px;
`;

export const Buttonconfirm = styled.button`
  position: relative;
  max-width: 50%;
  height: 55px;
  left: 20%;
  top: 2rem;
  bottom: 25px;
  color: #ffffff;
  font-family: "Roboto";
  font-size: 18px;
  border: none;
  border-color: #2166c1;
  background: #2166c1;
  border-radius: 10px;
  -webkit-transition: 0.3s;
  transition: 0.3s;

  :hover {
    background: #618dce;
    border: none;
    color: #fff;
  }

  @media (max-width: 960px) {
    width: 250px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -2rem;
    font-size: 18px;
  }
`;

export const Imagemprincipal = styled.div`
  max-width: 95%;
  height: 100%;
  margin-left: 5%;
  margin-top: 8%;
  overflow: auto;
  cursor: zoom-in;
  object-fit: fill;
  &img {
    :hover {
      scale: 1.25;
      transition: all 0.3s ease;
    }
  }
  @media (max-width: 980px) {
    max-width: 80%;
    overflow: auto;
    margin-top: 20%;
    margin-left: 10%;
    margin-top: 6%;

    img {
      max-width: 90%;
      max-height: 250px;
    }
  }
`;

export const Avalie = styled.button`
  position: relative;
  color: #3483fa;
  border: none;
  background: none;
  cursor: pointer;
  font-family: "Nunito Sans";
  font-style: normal;
  font-size: 13px;
  text-decoration: underline;
  top: 3.5em;

  @media (max-width: 960px) {
    top: -1em;
  }
`;

export const H1 = styled.h1`
  font-size: 18px;

  @media (max-width: 915px) {
  }
`;
export const DivInfo = styled.div`
  position: relative;
  margin-left: 20%;
  height: 20vh;
  width: 70%;
  top: 54vh;

  @media (max-width: 960px) {
    display: flex;
    margin-left: 2%;
    top: 70vh;
  }
`;
