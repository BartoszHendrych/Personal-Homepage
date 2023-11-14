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
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.buttonLink.text};
    text-align: center;
    font-size: 21px;
    font-style: normal;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        box-shadow: 0px 0px 0px 2px;
        background: ${({ theme }) => theme.colors.site.hover};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        gap: 12px;
    }
`;
