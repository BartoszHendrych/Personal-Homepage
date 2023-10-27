import styled from "styled-components";
import { themeDark } from "../../../../core/App/theme";

export const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 56px;
    margin-bottom: 0;

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
        margin-top: 40px;
    }
`;

export const Items = styled.li`
    &:not(:last-child) {
        margin-right: 24px;
        
        @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
            margin-right: 16px;
        }
    }
`;

export const Link = styled.a`
    transition: color 0.3s;
`;

export const styleIcon = Icon => styled(Icon)`
    height: auto;
    color: ${({ theme }) => theme.colors.textPrimary};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
        width: 32px;
    }
`;