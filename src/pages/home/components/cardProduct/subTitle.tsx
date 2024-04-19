import styled from "styled-components";

export const SubTitle = styled.p`
    font-size: 10px;
    text-align: justify;
    color: ${props => props.theme.darkColorText};
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical; 
    height: 100%;
`