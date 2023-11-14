import { Avatar, Summary, ThisIs, Wrapper, Name, StyledMessageIcon } from "./styled";
import BartoszHendrychProfile from "./zdjCV.jpg";
import { ButtonLink } from "../ButtonLink";
import { email } from "../data";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={BartoszHendrychProfile} alt="Bartosz Hendrych" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Bartosz Hendrych</Name>
            <Summary>
               I'm a passionate front-end developer who finds their calling in creating interactive and aesthetically
               pleasing websites and applications. 
            </Summary>
            <ButtonLink href={`mailto:${email}`} title={email}>
                <StyledMessageIcon />
                Hire Me
            </ButtonLink>
        </div>
    </Wrapper>
)