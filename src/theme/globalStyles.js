import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    html{
        height:100%;
    }

    *{
        padding:0;
        margin:0;
        background-color:#777777;
    }

    a{
        text-decoration:none;
    }
    a:hover{
        color:red;
    }

`;
export default GlobalStyle;
