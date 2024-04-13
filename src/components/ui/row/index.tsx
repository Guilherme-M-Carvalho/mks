import styled from "styled-components";

export const Row = styled.div<{ gap: boolean }>`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    ${props => props.gap && 'gap: 22px;'}


    @media only screen and (max-width: 500px) {
        justify-content: center;
    }
`