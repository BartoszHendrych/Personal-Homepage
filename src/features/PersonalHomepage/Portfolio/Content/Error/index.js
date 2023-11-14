import { Header, Paragraph, Wrapper, StyledIconDanger } from "./styled"
import { ButtonLink } from "../../../ButtonLink";
import { githubProfile } from "../../../data";

export const ErrorBox = () => (
    <Wrapper>
        <StyledIconDanger />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br /> 
            You can check them directly on Github.
        </Paragraph>
        <ButtonLink  href={githubProfile} target="_blank" rel="noreferrer">Go to Github</ButtonLink>
    </Wrapper>
)