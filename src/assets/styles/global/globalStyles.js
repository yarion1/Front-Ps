import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    *{
        padding:0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body, #root{
        height: 100vh;
        background-color: #FAF8FF;
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

    @media(max-width: 2000px){
        body{
            background-color: #FAF8FF;
            
        }
    }
`
export default globalStyle;