import { styled } from "styled-components";

export const List = styled.dl`
  margin: 0;
`;

export const Row = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 4em 1fr;

  &:nth-child(1) {
    margin-bottom: 8px;
  }
`;

export const Url = styled.dd`
  margin: 0;
`;

export const Name = styled.dt`
  font-size: 18px;
  letter-spacing: 0.9px;
  line-height: 1.4;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;

export const Link = styled.a`
  font-size: 18px;
  line-height: 1.4;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};

  &:visited {
    color: none;
  }

  &:active {
    color: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }
`;