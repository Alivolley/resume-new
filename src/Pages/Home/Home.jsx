import React from "react";
import styled from "styled-components";
import second from "./../../assets/Images/second.jpg";
import Typewriter from "typewriter-effect";
import colors from "../../Styles/Varibles";

export default function Home() {
   return (
      <HomeWrapper>
         <p>Ali Azghandi</p>
         <Typewriter
            onInit={(typewriter) => {
               typewriter.typeString("Frontend-developer").pauseFor(2000).deleteAll().start();
            }}
            options={{
               autoStart: true,
               loop: true,
            }}
         />
      </HomeWrapper>
   );
}

const HomeWrapper = styled.section`
   height: 100%;
   background-image: linear-gradient(90deg, rgba(4, 11, 20, 0.5) 0%, rgba(4, 11, 20, 0.5) 100%), url(${second});
   background-repeat: no-repeat;
   background-position: center center;
   background-size: cover;
   display: flex;
   flex-direction: column;
   justify-content: center;
   color: black;
   font-size: 4.8rem;
   font-weight: 900;
   padding-left: 10rem;
   padding-top: 8rem;
   margin-left: -1.5rem;

   @media (max-width: 576px) {
      align-items: center;
      padding-left: 0;
      padding-top: 0;
      font-size: 3rem;
      height: 100vh;
   }

   p,
   span {
      text-shadow: 0px 0px 10px ${colors.mainColor};
   }
`;
