import { socials } from "./socials"
import { Items, Link, List } from "./styled"

export const SocialIcons = () => (
   <List>
      {socials.map(({ name, url, Icon }) => (
         <Items key={name}>
            <Link href={url} title={name} target="_blank" rel="noreferrer">
               <Icon />
            </Link>
         </Items>
      ))}
   </List>
);