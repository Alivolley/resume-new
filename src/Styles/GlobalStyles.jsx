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

   html{
      font-size: 10px;
   }

   body{
      font-size: 1.6rem;
   }

   p{
      margin: 0;
   }

   @media (max-width: 576px) {
      .row{
         margin-top: 0; 
         margin-right: 0; 
         margin-left: 0;
      }

      .row>* {
      padding-right: 0;
      padding-left: 0;
      margin-top: 0;
   }
      
   }




`;
