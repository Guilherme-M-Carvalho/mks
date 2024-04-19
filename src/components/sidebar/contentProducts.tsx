import styled from "styled-components";

export const ContentProduct = styled.div`
    position: relative;
    display: flex;
    padding: 18px 20px;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media only screen and (max-width: 600px) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
`