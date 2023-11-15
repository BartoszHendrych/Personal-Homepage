import { List, Name, Url, Row, Link } from "./styled";

export const Links = ({ demoUrl, codeUrl }) => (
  <List>
    <Row>
      <Name>Demo:&nbsp;</Name>
      <Url>
        <Link href={demoUrl} target="_blank" rel="noreferrer">{demoUrl}</Link>
      </Url>
    </Row>
    <Row>
      <Name>Code:&nbsp;</Name>
      <Url>
        <Link href={codeUrl} target="_blank" rel="noreferrer">{codeUrl}</Link>
      </Url>
    </Row>
  </List>
);