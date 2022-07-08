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
  box-shadow: 3px 3px #858585, -1em 0 0.4em #858585;

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
  height: 136px;
  border: 1px solid black;
  border-radius: 12px;
  float: left;
  margin: 0.8%;

  ${media.mobile} {
    width: 98%;
    height: 100%;
    top: 243px;
    left: 59px;
    border: 1px solid black;
    border-radius: 12px;
    margin-right: 59px;
    justify-content: center;
  }
`;

export const Titulo = styled.strong`
  width: 50%;
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: left;
  margin-top: 1.2%;
  color: #000000;
  float: left;

  ${media.mobile} {
    width: 72%;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 700;
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
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #a9a9a9;
  float: left;

  ${media.mobile} {
    width: 100%;
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: left;
    color: #858585;
    float: left;
  }
`;
