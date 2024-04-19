import styled from "styled-components";

export const ContentActions = styled.div<{ action?: boolean, borderRight?: boolean; widthMax?: boolean }>`
    padding: 8px;
    font-size: 12px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    ${props => props.action && 'cursor: pointer;' }
    ${props => props.widthMax && 'width: 100%;' }
    ${props => props.borderRight && `border-right: 1px solid ${props.theme.borderColor};` }`