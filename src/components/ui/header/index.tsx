import styled from "styled-components";
import { Logo } from "./logo";
import { LogoSpan } from "./logoSpan";
import { Row } from "./row";

const Root = styled.header`
    background: ${props =>props.theme.primaryColor};
    height: 75px;
    grid-area: header;
`
export const  Header = {
    Root,
    LogoSpan,
    Logo,
    Row
}