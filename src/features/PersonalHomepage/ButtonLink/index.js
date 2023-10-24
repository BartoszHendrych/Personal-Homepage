import styled from "styled-components";

export const ButtonLink = styled.a`
    display: inline-flex;
    margin-top: 32px;
    padding: 12px 16px;
    gap: 16px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid;
    background: #0366D6;
    color: #ffffff;
    text-align: center;
    font-size: 21px;
    font-style: normal;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        box-shadow: 0px 0px 0px 2px;
        background: #2188FF;
    }

    @media(max-width: 767px) {
        font-size: 18px;
        gap: 12px;
    }
`;
