import styled from "styled-components";

export const PriceUnit = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    text-align: center;

    @media only screen and (max-width: 600px) {
        border-radius: 5px;
        opacity: 0px;
        color: white;
        display: flex;
        align-items: center;
        font-size: 13px;
        font-weight: 600;
        text-align: center;
        padding: 6px 10px;
        background: ${props => props.theme.darkColor};
    }
`