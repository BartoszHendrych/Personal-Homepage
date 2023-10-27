import styled from "styled-components";
import { themeDark } from "../../core/App/theme";

export const Wrapper = styled.div`
    max-width: 1248px;
    padding: 16px;
    margin: auto;

    @media(max-width: ${() => themeDark.breakpoints.mobile}px) {
        padding: 8px;
    }
`;