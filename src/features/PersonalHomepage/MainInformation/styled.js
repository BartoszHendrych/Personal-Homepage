import styled from "styled-components";
import { ReactComponent as MessageIcon } from "./Message.svg";

export const Wrapper = styled.header`
    display: grid;
    margin-top: -30px;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;

    @media(max-width: 998px) {
        grid-gap: 32px;
    }

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }
`;

export const Avatar = styled.img`
    width: 23vw;
    max-width: 380px;
    height:25vw;
    max-height: 420px;
    border-radius: 50%;

    @media(max-width: 767px) {
        width: 150px;
        height: 165px;
    }
`;

export const ThisIs = styled.div`
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: initial;
    color: #6E7E91;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 12px 0 0 0;
    color: #252525;

    @media(max-width: 767px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Summary = styled.p`
    max-width: 650px;
    font-size: 20px;
    line-height: 1.4;
    margin: 36px 0 0 0;
    color: #6E7E91;

    @media(max-width: 767px) {
        font-size: 17px;
        margin-top: 16px;
        max-width: 550px;
    }
`;

export const StyledMessageIcon = styled(MessageIcon)`
    color: #ffffff;
    justify-content: center;
    align-items: center;
`;