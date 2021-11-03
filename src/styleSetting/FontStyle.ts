import { createGlobalStyle } from "styled-components";
import NotoSerifJPMedium from "../fonts/NotoSerifJP/NotoSerifJP-Medium.woff";
import RalewayBold from "../fonts/Raleway/Raleway-Bold.woff";
import RalewayMedium from "../fonts/Raleway/Raleway-Medium.woff";

export const FontStyles = createGlobalStyle`

@font-face {
    font-family: 'NotoSerifJPMedium';
    src: url(${NotoSerifJPMedium}) format('woff');
}

@font-face {
    font-family: 'RalewayBold';
    src: url(${RalewayBold}) format('woff');
}

@font-face {
    font-family: 'RalewayMedium';
    src: url(${RalewayMedium}) format('woff');
}
`;