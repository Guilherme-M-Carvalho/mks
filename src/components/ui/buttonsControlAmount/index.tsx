import styled from "styled-components";
import { ContentActions } from "./contentActions";

const Root = styled.div`
    border: 1px solid ${props => props.theme.borderColor};
    overflow: hidden;
    border-radius: 4px;
    display: flex;
    width: 90px;
    height: 30px;
`

export const ButtonControlAmount = {
    Root,
    ContentActions
}