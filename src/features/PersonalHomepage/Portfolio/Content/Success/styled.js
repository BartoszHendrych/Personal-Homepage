import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-gap: 16px;
    grid-template-columns: 1fr;
  }
`;

export const Container = styled.div`
  display: grid;
  gap: 24px;
`;

export const Tile = styled.div`
  margin: 0;
  border: 5px solid  ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: 4px;
  padding: 56px;
  background: ${({ theme }) => theme.colors.boxBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 20px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.site.text};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;