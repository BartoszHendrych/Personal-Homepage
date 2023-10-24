import { Avatar, Summary, ThisIs, Wrapper, Name } from "./styled";
import BartoszHendrychProfile from "./zdjCV.jpg";
import { ButtonLink, Icon } from "../ButtonLink";

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

            <ButtonLink>
                <Icon />
                Hire me
            </ButtonLink>
        </div>
    </Wrapper>
)