import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import Alert from "react-bootstrap/Alert";
import PortfolioItem from "../../Components/PortfolioItem/PortfolioItem";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import insta from "./../../assets/Images/insta.png";
import music from "./../../assets/Images/music.png";
import furniture from "./../../assets/Images/furniture.png";
import portfo from "./../../assets/Images/portfo.png";
import camp from "./../../assets/Images/camp.png";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
   const { t, i18n } = useTranslation();

   return (
      <PortfolioWrapper direct={i18n.language}>
         <SectionTitle>{t("portfolio")}</SectionTitle>
         <AlertCustom variant={"danger"}>
            <Title>{t("portfolioAlert")}</Title>
            <div>
               <p>username : ali</p>
               <p>email : ali@gmail.com</p>
               <p>password : 1234</p>
            </div>
         </AlertCustom>

         <Row>
            <PortfolioItem source={insta} explain={t("instagramDescribtion")} goTo={"https://instagram-project-kohl.vercel.app/"} />
            <PortfolioItem source={music} explain={t("musicDescribtion")} goTo={"https://music8.netlify.app/"} />
            <PortfolioItem source={furniture} explain={t("furnitureDescribtion")} goTo={"https://forniture-opal.vercel.app/"} />
            <PortfolioItem source={portfo} explain={t("personalDescribtion")} goTo={"https://landing8.netlify.app/"} />
            <PortfolioItem source={camp} explain={t("campingDescribtion")} goTo={"https://camping8.netlify.app/"} />
         </Row>
      </PortfolioWrapper>
   );
}

const PortfolioWrapper = styled.section`
   direction: ${({ direct }) => (direct === "fa" ? "rtl" : "ltr")};
   margin-top: 2rem;
   padding: 0 3rem;
   margin-bottom: 5rem;
`;

const AlertCustom = styled(Alert)`
   display: flex;
   flex-direction: column;
   margin-bottom: 0;

   div {
      display: flex;
      gap: 5rem;
   }

   @media (max-width: 576px) {
      margin-top: 2rem;
      margin-bottom: 3rem;

      div {
         display: flex;
         flex-direction: column;
         gap: 1rem;
      }
   }
`;

const Title = styled.p`
   margin-bottom: 1.5rem;

   span {
      font-weight: 700;
      font-size: 1.8rem;
      text-decoration: underline;
   }
`;
