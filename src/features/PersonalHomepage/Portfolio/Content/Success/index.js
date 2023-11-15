import { Tile, Title, Wrapper, Description, Container } from "./styled";
import { Links } from "./Links";

export const Success = ({ projects }) => (
  <Wrapper>
    {projects
      ? projects.map(({ id, name, description, html_url, homepage }) => (
          <Tile key={id}>
            <Container>
              <Title>{name}</Title>
              <Description>{description}</Description>
              <Links codeUrl={html_url} demoUrl={homepage} />
            </Container>
          </Tile>
        ))
      : ""}
  </Wrapper>
);