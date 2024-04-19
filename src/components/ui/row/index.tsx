import styled from "styled-components";

export const Row = styled.div<{ gap?: boolean; center?: boolean }>`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    ${props => props.gap && 'gap: 22px;'}
    ${props => props.center && 'justify-content: center;'}


    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`