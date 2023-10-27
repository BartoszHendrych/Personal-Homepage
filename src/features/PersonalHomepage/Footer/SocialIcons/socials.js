import { styleIcon } from "./styled";
import { ReactComponent as GitHubIcon  } from "./icons/GitHub.svg";
import { ReactComponent as LinkedInIcon  } from "./icons/LinkedIN.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/BartoszHendrych",
        Icon: styleIcon(GitHubIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bartek-hendrych-4b74b0262/",
        Icon: styleIcon(LinkedInIcon),
    },
]
