import { createGlobalStyle } from "styled-components";
import NunitoSansRegular from "../assets/fonts/NunitoSans-Regular.ttf"

export default createGlobalStyle`

@font-face {
  font-family: 'Nunito Sans Regular';
  src: url(${NunitoSansRegular}) format('truetype');
  font-weight: 300;
  font-style: normal;
  font-display: auto;
}
 

  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans Regular';
  }
`;
