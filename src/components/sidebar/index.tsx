import styled from "styled-components";
import { ButtonFinish } from "./buttonFinish";
import { RowHeader } from "./rowHeader";
import { ContentProduct } from "./contentProducts";
import { ContentClose } from "./contentClose";
import { Body } from "./body";
import { Image } from "./image";
import { Title } from "./title";
import {motion} from "framer-motion"
import { PriceUnit } from "./priceUnit";
import { ContentTitleCard } from "./contentTitleCard";
import { Total } from "./total";
import { SpanTotal } from "./spanTotal";

export const Root = styled(motion.div)`
    width: 500px;
    position: absolute;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`
export const RootContent = styled(motion.aside)`
    background: ${props => props.theme.primaryColor};
    width: 100%;
    position: absolute;
    right: 0;
    height: 100vh;
    box-shadow: -5px 0px 6px 0px #00000021;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

export const Sidebar = {
    Root,
    RootContent,
    ButtonFinish,
    RowHeader,
    ContentProduct,
    ContentClose,
    Body,
    Image,
    Title,
    PriceUnit,
    ContentTitleCard,
    Total,
    SpanTotal
}