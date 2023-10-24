import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
`;

export const Avatar = styled.img`
    width: 20vw;
    height: 380px;
    border-radius: 50%;
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
`;

export const Summary = styled.p`
    max-width: 650px;
    font-size: 20px;
    line-height: 1.4;
    margin: 36px 0 0 0;
    color: #6E7E91;
`;