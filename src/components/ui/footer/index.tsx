import styled from "styled-components";

export const Footer = styled.footer`
    grid-area: footer;
    background: ${props => props.theme.bgFooterColor};
    display: flex;
    align-items: center;
    justify-content: center;
`