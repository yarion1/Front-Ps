import styled from 'styled-components';

export const ButtonDetails = styled.button `
height: 66px;
width: 332px;

background: #F1F1F1;
border: 1px solid rgba(0, 0, 0, 0.06);

font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;

color: rgba(0, 0, 0, 0.43);

:hover{
    background: #52AFCC;
    border: 1px #solid 080436;
    color: #ffff;
}
&.selectedPage {
    background: #080436;
    border: 1px #solid 080436;
    color: #ffff;
}

`;