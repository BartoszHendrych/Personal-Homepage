import { List, Section, Item, Title, StyledEllipse } from "./styled";
import { skills, nextSkills } from "./skillsData";

export const Skills = () => (
   <>
      <Section>
         <Title>My skillset includes</Title>
         <List>
            {skills.map(skill => (
               <Item key={skill}>
                  <StyledEllipse />{skill}
               </Item>
            ))}
         </List>
      </Section>
      <Section>
         <Title>What I want to learn next</Title>
         <List>
            {nextSkills.map(nextSkill => (
               <Item key={nextSkill}>
                  <StyledEllipse />{nextSkill}
               </Item>
            ))}
         </List>
      </Section>
   </>
)