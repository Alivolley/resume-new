import { createGlobalStyle } from "styled-components";
import Fonts from "./Fonts";

export const GlobalStyle = createGlobalStyle`
   ${Fonts}

   *,
  * * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "vazir";
   }



   a,
   a:hover {
      text-decoration: none;
   }
`;
