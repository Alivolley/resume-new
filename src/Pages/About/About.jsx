import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import SectionTitle from "./../../Components/SectionTitle/SectionTitle";
import AboutItem from "../../Components/AboutItem/AboutItem";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbUsers } from "react-icons/tb";
import { GiRank3, GiModernCity } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import colors from "../../Styles/Varibles";
import { useTranslation } from "react-i18next";

export default function About() {
   const { t, i18n } = useTranslation();

   return (
      <AboutWrapper direct={i18n.language}>
         <SectionTitle>{t("aboutHeader")}</SectionTitle>
         <Describtion>{t("aboutDescribtion")}</Describtion>
         <Title>{t("position")}</Title>
         <Text>{t("aboutUnderPosition")}</Text>

         <Infos>
            <Row>
               <AboutItem quest={t("Age") + " : "} res={t(23)} icon={<IoCalendarNumberOutline />} />
               <AboutItem quest={t("MarriageStatus") + " : "} res={t("Single")} icon={<TbUsers />} />
               <AboutItem quest={t("MilitaryServiceStatus") + " : "} res={t("Done")} icon={<GiRank3 />} />
               <AboutItem quest={t("TypeOfPartnership") + " : "} res={t("Remote")} icon={<FaRegHandshake />} />
               <AboutItem quest={t("City") + " : "} res={t("Kermanshah")} icon={<GiModernCity />} />
               <AboutItem quest={t("Exprience") + " : "} res={t("Year")} icon={<GrWorkshop />} />
            </Row>
         </Infos>
      </AboutWrapper>
   );
}

const AboutWrapper = styled.section`
   direction: ${({ direct }) => (direct === "fa" ? "rtl" : "ltr")};
   margin-top: 5rem;
   padding: 0 3rem;
`;

const Describtion = styled.h3`
   margin-top: 7rem;
   line-height: 3.2rem;

   @media (max-width: 1100px) {
      padding: 0;
      margin-top: 2rem;
   }

   @media (min-width: 576px) and (max-width: 992px) {
      font-size: 1.4rem;
   }
`;

const Title = styled.h2`
   margin-top: 5rem;
   color: ${colors.hover};
   font-weight: 700;
   font-size: 2.4rem;
`;

const Text = styled.p`
   margin-top: 2rem;
`;

const Infos = styled.div`
   margin-top: 5rem;
   padding: 0 5rem;

   @media (max-width: 1100px) {
      padding: 0;
      margin-top: 2rem;
      margin-bottom: 7rem;
   }
`;
