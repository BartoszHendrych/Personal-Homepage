import { createGlobalStyle } from "styled-components";
import { themeDark } from "./theme";

export const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: ${({ theme }) => theme.colors.site.background};
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        overflow-y: scroll;
        color: ${({ theme }) => theme.colors.site.text};
        word-break: break-word;
        padding-bottom: 108px;
        transition: background 0.3s;

        @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
            padding-bottom: 32px;
        }
    }
`;