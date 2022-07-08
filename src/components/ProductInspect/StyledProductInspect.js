import styled from "styled-components";

export const ButtonDetails = styled.button`
  width: 100%;
  height: 66px;
  background: #faf8ff;
  border: 1px solid #b5bcfb;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 100%;
  line-height: 23px;
  overflow: auto;

  color: rgba(0, 0, 0, 0.43);

  :hover {
    background: #e3d6fe;
    border: 1px solid #130a1d;
    color: #130a1d;
  }
  &.selectedPage {
    background: #130a1d;
    border: 1px solid #130a1d;
    color: #ffff;
  }
`;

export const Divdetails = styled.div`
  display: flex;
  position: relative;
  flex-direction: inline-block;
  align-items: center;
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 15%;

  @media (max-width: 960px) {
    margin-left: 1%;
    margin-right: 1%;
    display: flex;
    top: 12rem;
    flex-direction: inline-block;
  }
`;
