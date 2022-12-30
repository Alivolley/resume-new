import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import colors from "../../Styles/Varibles";

export default function AboutItem({ quest, res, icon }) {
   const { i18n } = useTranslation();

   return (
      <ColBs sm={6} direct={i18n.language}>
         <Icon>{icon}</Icon>
         <Quest>{quest}</Quest>
         <Response>{res}</Response>
      </ColBs>
   );
}

const ColBs = styled(Col)`
   display: flex;
   align-items: center;
   gap: ${({ direct }) => direct === "fa" && "1rem"};

   margin-top: 2.5rem !important;

   @media (max-width: 1100px) {
      font-size: 1.5rem;
   }
`;

const Icon = styled.span`
   font-size: 2.5rem;
   margin-right: 0.8rem;

   @media (max-width: 1100px) {
      font-size: 1.5rem;
   }
`;

const Quest = styled.label`
   font-size: 2rem;

   @media (max-width: 1100px) {
      font-size: 1.5rem;
   }
`;

const Response = styled.p`
   color: ${colors.hover};
   font-size: 1.8rem;
   font-weight: 700;
   margin-left: 1rem;

   @media (max-width: 1100px) {
      font-size: 1.5rem;
   }
`;
