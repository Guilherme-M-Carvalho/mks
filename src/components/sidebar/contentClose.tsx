import styled from "styled-components";

export const ContentClose = styled.div`
    position: absolute;
    right: -12px;
    top: -12px;
    z-index:2;

    @media only screen and (max-width: 600px) {
        right: 0px;
        top: 0px;
    }
`