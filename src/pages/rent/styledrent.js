import styled from "styled-components";

const media = {
  mobile: "@media(max-width: 768px)",
};

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: block;
  padding-top: 98px;

  ${media.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Post = styled.p`
  width: 100%;
  margin: 0.8%;
  float: left;
  cursor: pointer;
  box-sizing: border-box;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-radius: 15px;

  ${media.mobile} {
    width: 80%;
    justify-content: center;
    float: left;
    display: block;
    margin-left: 10%;
    margin-bottom: 10%;
    border: 0.1rem solid #000000;
    border-radius: 2%;
  }
`;

export const Capa = styled.img`
  width: 194px;
  height: 140px;
  border: 1px solid rgba(0, 0, 0, 0.21);
  border-radius: 12px;
  float: left;
  margin: 0.8%;
  box-sizing: border-box;
  overflow: hidden;

  ${media.mobile} {
    width: 98%;
    height: 100%;
    top: 243px;
    left: 59px;
    border: 1px solid rgba(0, 0, 0, 0.21);
    border-radius: 12px;
    margin-right: 59px;
    justify-content: center;
  }
`;

export const Titulo = styled.strong`
  width: 50%;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  font-size: 18px;
  margin-bottom: 5px;
  text-align: left;
  margin-top: 1.2%;
  color: #000000;
  float: left;

  ${media.mobile} {
    width: 72%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-align: left;
    margin: 1.2%;
    display: block;
    float: left;
    color: #000000;
  }
`;

export const Subtitulo = styled.p`
  width: 64%;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 25px;

color: #858585;
  font-size: 14px;
  color: #454545;
  float: left;

  ${media.mobile} {
    width: 100%;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    text-align: left;
    color: #454545;
    float: left;
  }

  h6{
    font-size: 14px;
  }
`;

export const Price = styled.div `
  position: relative;
  display:flex;
  height: 48px;
  width: 100px;
  margin-right: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  top:2.9em;
  right: 0em;
  background-color: #130A1D;
  color: white;
  border-radius: 20px;

  h2{
    font-size: 1.1vw;
  }


`;