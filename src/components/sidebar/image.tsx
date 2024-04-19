import styled from "styled-components";

export const Image = styled.img`
width: 50px;
height: 50px;
object-fit: contain;

@media only screen and (max-width: 600px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    height: 80px
}
`