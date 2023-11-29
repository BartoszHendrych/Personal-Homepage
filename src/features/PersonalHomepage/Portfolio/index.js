import { StyledIconGitHub, Wrapper, Section, Header, Description } from "./styled";
import { useState, useEffect } from "react";
import { Content } from "./Content";
import { getRepositories } from "./getRepositories";

export const Portfolio = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setProjects("loading");

    const timeoutId = setTimeout(() => {
      getRepositories()
        .then((projects) => {
          setProjects(projects);
        })
        .catch(() => {
          setProjects("error");
        });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Wrapper>
      <Section>
        <StyledIconGitHub />
        <Header>Portfolio</Header>
        <Description>My recent projects</Description>
      </Section>
      
      <Content projects={projects} />
    </Wrapper>
  );
};