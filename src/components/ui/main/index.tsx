import styled from "styled-components";

export const Main = styled.main`
    grid-area: main;
    background: ${props => props.theme.bgColor};
    height: 100%;
    overflow-y: auto;
    padding: 50px 100px;
    @media only screen and (max-width: 500px) {
        padding: 16px 50px;
    }
`