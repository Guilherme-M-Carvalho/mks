import styled from "styled-components";

export const ButtonClose = styled.button<{ medium?: boolean; blackColor?: boolean }>`
    cursor: pointer;
    border: none;
    background: #000;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    border-radius: 50%;
    padding: 2px;
    color: white;
    ${props => props.medium && 'width: 38px;height: 38px; font-size: 22px;'}

    @media only screen and (max-width: 600px) {
        color: ${props => props.theme.primaryColor};
        ${props => props.blackColor && `
            color: black;
            background: transparent;
            font-size: 18px;
        `}
    }
    
`