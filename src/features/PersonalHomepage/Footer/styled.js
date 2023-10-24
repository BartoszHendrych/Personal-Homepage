import styled from "styled-components";


export const Wrapper = styled.footer`
    margin-top: 100px;

    @media(max-width: 767px){
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

    @media(max-width: 767px) {
        margin: 12px 0;
    }
`;

export const EmailLink = styled.a`
    color: #252525;
    font-size: 32px;
    font-weight: 900;
    text-decoration: none;

    &:hover {
        color: #0366D6;
    }

    @media(max-width: 767px) {
        font-size: 18px;
    }
`;

export const Paragraph = styled.p`
    max-width: 670px;
    font-size: 18px;
    font-weight: 400;
    color: #252525;
    line-height: 1.4;

    @media(max-width: 767px) {
        font-size: 14px;
    }
`;