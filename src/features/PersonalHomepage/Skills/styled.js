import styled from "styled-components";
import { ReactComponent as EllipseIcon } from "./Ellipse.svg";
import { themeDark } from "../../../core/App/theme";

export const Section = styled.div`
    margin-top: 72px;
    padding: 32px;
    background:${({ theme }) => theme.colors.boxBackground};
    border-radius: 5px;
    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        margin-top: 48px;
        padding: 16px;
    }
`;

export const List = styled.ul`
    display: grid;
    grid-gap: 8px 115px;
    grid-template-columns: repeat(3, 1fr);
    font-size: 18px;
    list-style: none;
    margin-top: 32px;
    padding: 0;


    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
        margin-top: 12px;
        font-size: 14px;
    }
`;

export const Item = styled.li`
    display: flex;
    line-height: 1.4; 
    font-size: 18px;
    font-weight: 400;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 14px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 30px;
    font-weight: 900;
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(209, 213, 218, 0.30); 

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        font-size: 18px;
        padding-bottom: 12px;
    }
`;

export const StyledEllipse = styled(EllipseIcon)`
    height: auto;
    margin-right: 16px;

    
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 6px;
        height: auto;
        margin-right: 8px;
    }
`;
