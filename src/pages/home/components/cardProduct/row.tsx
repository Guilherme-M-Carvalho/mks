import styled from "styled-components";

export const Row = styled.div<{gap?: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 16px;
    height: fit-content;
    ${props => props.gap && 'gap: 6px;'}
`