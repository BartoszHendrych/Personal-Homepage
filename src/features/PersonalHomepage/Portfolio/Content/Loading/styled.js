import styled, { keyframes } from "styled-components";
import { ReactComponent as IconSpinner } from "./icon-spinner.svg";

const rotate = keyframes`
    to {
        transform: rotate(360deg);
    }
`;
export const Wrapper = styled.div`
    margin-top: 88px;
    justify-items: center;
    text-align: center;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
       margin-top: 45px;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 400;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
       font-size: 14px;
    }
`;


export const StyledIconSpinner = styled(IconSpinner)`
    margin-top: 48px;
    animation: ${rotate} 1s linear infinite;
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
       font-size: 24px;
       width: 80px;;
    }
`;