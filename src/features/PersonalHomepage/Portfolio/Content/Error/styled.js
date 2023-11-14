import styled from "styled-components";
import { ReactComponent as IconDanger } from "./Danger.svg";

export const Wrapper = styled.div`
    margin-top: 88px;
    justify-items: center;
    text-align: center;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
       margin-top: 45px;
    }
`;

export const Header = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
       font-size: 18px;
       margin-top: 8px;
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

export const StyledIconDanger = styled(IconDanger)`
    color: ${({ theme }) => theme.colors.textPrimary};
`;