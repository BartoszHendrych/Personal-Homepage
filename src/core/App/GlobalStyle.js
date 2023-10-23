import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: #FBFBFE;
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        overflow-y: scroll;
        color: #6E7E91;
        word-break: break-word;
        padding-bottom: 108px;
        transition: background 0.3s;

        @media(max-width: 767px) {
            padding-bottom: 32px;
        }
    }
`;