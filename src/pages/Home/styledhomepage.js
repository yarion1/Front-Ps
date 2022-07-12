import styled from "styled-components";
import { Card, Button } from "reactstrap";

export const Page = styled.body`
  padding: 1.5%;
`;

export const cardfaixa = styled.div`
  width: 50px;
  color: #2d1f3f;
  height: 50px;
`;
export const Gambi = styled.div`
  height: 25px;
`;

export const Gambi2 = styled.div`
  height: 5px;
`;

export const Gambi3 = styled.div`
  height: 90px;
`;

export const Gamb = styled.div`
  height: 20px;
`;

export const CardSignUp = styled(Card)`
  display: inline-block;
  width: 27%;
  height: 250px;
  margin-top: 5%;
  text-align: center;
  cursor: pointer;
  transform: scale(0.9);
  transition: all ease 0.5s;
  overflow: hidden;
  opacity: 1 solid black;
  background-color: #618DC0;
  box-shadow: 5px 5px 5px grey;
  border-radius: 10px;
  background: linear-gradient(#2d1f3f 40%, rgba(0, 0, 0, 0) 30%);
`;

export const CardRent = styled(Card)`
  display: inline-block;
  width: 27%;
  height: 250px;
  margin-top: 5%;
  text-align: center;
  cursor: pointer;
  transform: scale(0.9);
  transition: all ease 0.5s;
  overflow: hidden;
  opacity: 1 solid black;
  background-color: #618DC0;
  box-shadow: 5px 5px 5px grey;
  border-radius: 10px;
  margin-left: 9%;
  background: linear-gradient(#2d1f3f 40%, rgba(0, 0, 0, 0) 30%);
`;

export const CardProfile = styled(Card)`
  display: inline-block;
  width: 27%;
  height: 250px;
  margin-top: 5%;
  text-align: center;
  cursor: pointer;
  transform: scale(0.9);
  transition: all ease 0.5s;
  overflow: hidden;
  opacity: 1 solid black;
  background-color: #618DC0;
  box-shadow: 5px 5px 5px grey;
  border-radius: 10px;
  margin-left: 9%;
  background: linear-gradient(#2d1f3f 40%, rgba(0, 0, 0, 0) 30%);
`;

export const CardButtons = styled.button`
  position: absolute;
  display: flex;
  text-align: center;
  top: 190px;
  left: 15%;
  right: 0%;
  background: #2d1f3f;
  border-radius: 30px;
  transform: scale(1);
  width: 70%;
  height: 50px;
  font-size: 3vh;
  font-weight: bold;
  padding-left: 14%;
  padding-top: 9px;
  hover {
    transition: all ease 0.3s;
    transform: scale(0.9);
  }
`;

export const Textcategoria = styled.h5`
  line-height: 20px;
  position: absolute;
  font-style: normal;
  font-weight: bold;
  font-size: 3.5 vh;
  text-align: center;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 5px;
  color: #8b8b8b;
  hover {
  }

  @media (max-width: 768px) {
    font-size: 3vh;
  }
`;

export const Textmid = styled.div`
  line-height: 40px;
  position: center;
  font-style: normal;
  font-weight: bold;
  font-size: 5vh;
  text-align: center;
  padding-top: 50px;
  color: black;
`;

export const Sublinhado = styled.div`
  position: absolute;
  text-align: center;
  background: #2d1f3f;
  height: 5px;
  border-radius: 40px;
  left: 28%;
  width: 600px;
`;

export const Cardcategory = styled(Card)`
  display: inline-block;
  width: 25%;
  margin-top: 3%;
  text-align: center;
  cursor: pointer;
  transform: scale(0.9);
  transition: all ease 0.5s;
  overflow: hidden;
  opacity: 0.2 solid black;
  border-color: white;

  :hover {
    transform: scale(1.05);
    transition: all ease 0.3s;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(#2d1f3f 40%, rgba(0, 0, 0, 0) 30%);
  }
`;

export const Cortediv = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  border-top: 150px solid #2d1f3f;
  border-left: 0px solid transparent;
  border-right: 330px solid transparent;
  width: 50px;
`;

export const CardRowleft = styled.div`
  position: absolute;
  width: 40px;
  height: 200px;
  background-color: #8b8b8b;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  left: 0;
  margin-top: 250px;

  :hover {
    opacity: 1;
  }
`;

export const CardRowright = styled.div`
  position: absolute;
  width: 40px;
  height: 200px;
  background-color: #8b8b8b;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  right: 0;
  margin-top: 250px;

  :hover {
    opacity: 1;
  }
`;

/*background: #120F33B8;
width: 65%;
opacity: 0.85;
left:0;
bottom: -4em;
height: 20em;
position: absolute;
transform: scale(1.2);
transition: all ease 0.5s;
border:none;
*/
