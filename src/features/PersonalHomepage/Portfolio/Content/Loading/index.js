import { Wrapper, Paragraph, StyledIconSpinner } from "./styled"

export const Loading = () => (
    <Wrapper>
        <Paragraph>
            Please wait, projects are being loaded...
        </Paragraph>
        <StyledIconSpinner />
    </Wrapper>
);