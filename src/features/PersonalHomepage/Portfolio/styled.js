import { styled } from "styled-components";
import { ReactComponent as IconGitHub } from "./GitHubPortfolio.svg";

export const Wrapper = styled.section`
  margin-top: 72px;

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      margin-top: 48px;
    }
`;

export const Section = styled.section`
   text-align: center;
   margin: 0;
`;

export const StyledIconGitHub = styled(IconGitHub)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 12px;
`;

export const Header = styled.h2`
  margin: 0;
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  margin-top: 8px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 17px;
  }
`;