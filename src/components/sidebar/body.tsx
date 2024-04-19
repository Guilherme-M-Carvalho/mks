import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    padding: 44px;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    gap: 24px;

    @media only screen and (max-width: 600px) {
        padding: 24px;
    }
`