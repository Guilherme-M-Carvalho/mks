import styled from "styled-components";

export const Content = styled.div`
    padding: 50px 100px;
    height: 100%;
    width: 100%;   
    margin-bottom: 16px;
    overflow-y: auto;

    @media only screen and (max-width: 600px) {
        padding: 16px 50px;
        padding-bottom: 0px;
    }
`