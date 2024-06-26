import styled from "styled-components";

export const Card = styled.div<{ disabledShadow?: boolean; fitContent?: boolean; noOverflow?: boolean; widthMax?: boolean }>`
    width: 218px;
    height: 285px;
    border-radius: 8px;
    background: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    ${props => props.disabledShadow && 'box-shadow: none;'}
    ${props => props.fitContent && 'height: fit-content; width:fit-content;'}
    ${props => props.noOverflow && 'overflow: initial;'}
    ${props => props.widthMax && 'width:100%;'}
`