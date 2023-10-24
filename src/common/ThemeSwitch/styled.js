import styled, {css} from "styled-components";
import { ReactComponent as SunIcon} from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    color: inherit;
    background: none;
    border: none;
    cursor: pointer;
    outline-offset: 8px;
`;

export const Text = styled.span`
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 12px;

    @media(max-width: 767px) {
        display: none;
    }
`;

export const Box = styled.span`
    width: 48px;
    border: 1px solid;
    padding: 3px;
    border-radius: 20px;
    display: flex;
    background: #E5E5E5;
`;

export const IconWrapper = styled.span`
    background: currentColor;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    transition: transform 0.3s;

    ${({ moveToRight}) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: #FFFFFF;
`;

