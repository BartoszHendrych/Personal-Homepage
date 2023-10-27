import { Wrapper } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";

export const PersonalHomepage = () => (
    <Wrapper>
        <ThemeSwitch />
        <MainInformation />
        <Skills />
        <Portfolio />
        <Footer />
    </Wrapper>
)