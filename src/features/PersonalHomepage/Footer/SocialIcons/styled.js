import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 56px;
    margin-bottom: 0;

    @media(max-width: 767px) {
        margin-top: 40px;
    }
`;

export const Items = styled.li`
    &:not(:last-child) {
        margin-right: 24px;
        
        @media(max-width: 767px) {
            margin-right: 16px;
        }
    }
`;

export const Link = styled.a`
    transition: color 0.3s;
`;

export const styleIcon = Icon => styled(Icon)`
    height: auto;
    color: #000000;

    &:hover {
        color: #0366D6;
    }

    @media(max-width: 767px) {
        width: 32px;
    }
`;