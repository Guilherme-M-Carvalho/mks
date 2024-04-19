import styled from "styled-components";

export const RowHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 44px;
    padding-right: 18px;
    padding-bottom: 4px;
    padding-top: 36px;
    
    @media only screen and (max-width: 600px) {
        padding: 24px;
        padding-right: 16px;
        padding-bottom: 4px;
    }
`