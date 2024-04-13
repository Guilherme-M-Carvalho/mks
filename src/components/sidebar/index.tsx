import styled from "styled-components";
import { ButtonFinish } from "./buttonFinish";
import { RowHeader } from "./rowHeader";

export const Root = styled.aside`
    background: ${props => props.theme.primaryColor};
    width: 500px;
    position: absolute;
    right: 0;
    height: 100vh;
    box-shadow: -5px 0px 6px 0px #00000021;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        width: 80vw;
    }
`

export const Sidebar = {
    Root,
    ButtonFinish,
    RowHeader
}