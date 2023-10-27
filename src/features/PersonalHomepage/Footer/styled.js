import styled from "styled-components";
import { themeDark } from "../../../core/App/theme";


export const Wrapper = styled.footer`
    margin-top: 100px;

    @media(max-width: ${() => themeDark.breakpoints.mobile}px){
        margin-top: 45px;
    }
`;

export const LetsTalk = styled.h2`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
`;

export const EmailWrapper = styled.div`
    margin: 24px 0;

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
        margin: 12px 0;
    }
`;

export const EmailLink = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 32px;
    font-weight: 900;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;

export const Paragraph = styled.p`
    max-width: 670px;
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.4;

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;