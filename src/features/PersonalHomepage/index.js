import { Wrapper } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { MainInformation } from "./MainInformation";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";

export const PersonalHomepage = () => (
    <Wrapper>
        <ThemeSwitch />
        <MainInformation />
        <Portfolio />
        <Footer />
    </Wrapper>
)