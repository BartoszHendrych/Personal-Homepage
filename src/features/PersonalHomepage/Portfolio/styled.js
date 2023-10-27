import styled from "styled-components";
import { ReactComponent as GitHubIcon} from "./GitHubPortfolio.svg";
import { themeDark } from "../../../core/App/theme";

export const Section = styled.section`
    margin-top: 72px;

    @media(max-width: 767px) {
        margin-top: 48px;
    }
`;
 
export const StyledGitHubIcon = styled(GitHubIcon)`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
`;

export const Header = styled.header`
    text-align: center;
`;

export const MyRecentProjects = styled.h3`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-align: center;
    margin-top: 8px;
    margin-bottom: 24px;

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
       font-size: 17px;
       margin-top: 16px;
    }
`;

export const Title = styled.p`
    margin-top: 12px;
    margin: 0%;
    font-size: 30px;
    font-style: normal;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textPrimary};

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
        font-size: 18px;
    }
`;
