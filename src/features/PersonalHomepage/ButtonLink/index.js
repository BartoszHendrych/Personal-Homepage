import styled, { css } from "styled-components";
import { ReactComponent as MessageIcon} from "./Message.svg";

export const ButtonLink = styled.button`
    display: inline-flex;
    padding: 12px 16px;
    margin-top: 32px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid;
    background: #0366D6;
    color: #ffffff;
    font-weight: 600;
    font-size: 20.058px;
    box-shadow: 0px 2px 0px 0px;
    cursor: pointer;

    &:hover {
        background: #2188FF;
    }
`;

export const Icon = styled(MessageIcon)`

    ${({ moveToRight}) => moveToRight && css`
        transform: translateX(16px);
    `}
`;