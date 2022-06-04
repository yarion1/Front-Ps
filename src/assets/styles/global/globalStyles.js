import { createGlobalStyle } from "styled-components";
import Bkground1 from '../../img/Ellipse1.svg';
import Bkground2 from '../../img/Ellipse2.svg';

const globalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }
    
    button{
        backgroubd-color: none;
        border: none;
        outline: none;
    }

    a{
        text-decoration:none;
        outline:none;
    }

    @media(max-width: 1750px){
        body{
            background: url(${Bkground2}) no-repeat 670px, url(${Bkground1}) no-repeat 620px;
            background-size: cover;
            background-color: #FAF8FF;
        }
    }
`
export default globalStyle;