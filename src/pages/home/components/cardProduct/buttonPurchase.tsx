import styled from "styled-components";

export const ButtonPurchase = styled.button`
    background: ${props => props.theme.primaryColor};
    height: 36px;
    width: 100%;
    border:none;
    display: flex;
    align-self: end;
    font-size: 14px;
    font-weight: 600;
    color: white;
    gap: 16px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: auto;
`