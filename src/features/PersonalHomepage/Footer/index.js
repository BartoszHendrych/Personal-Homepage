import { email } from "../data"
import{ SocialIcons} from "./SocialIcons"
import { Wrapper, LetsTalk, EmailWrapper, EmailLink, Paragraph } from "./styled"

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <div>
            <EmailWrapper>
                <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
            </EmailWrapper>
        </div>
        <Paragraph>
            Hello, I'm open to new projects and can assist you with various aspects of website or mobile app 
            development. Depending on your specific needs and what you want to include on the website or in the app. 
            If you have specific questions, let me know, and I'll be happy to help!"
        </Paragraph>
        <SocialIcons />
    </Wrapper>
)