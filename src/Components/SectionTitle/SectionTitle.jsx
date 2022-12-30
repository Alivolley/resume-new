import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import colors from "../../Styles/Varibles";

export default function SectionTitle({ children }) {
   const { i18n } = useTranslation();

   return <SectionTitleWrapper direct={i18n.language}>{children}</SectionTitleWrapper>;
}

const SectionTitleWrapper = styled.h1`
   color: ${colors.primary};
   font-size: 3rem;
   font-weight: 700;
   width: fit-content;
   border-bottom: 0.35rem solid ${colors.hover};
   padding-right: 1.5rem;
   padding-left: 0.5rem;
   border-bottom-right-radius: 1rem;
   margin-left: ${({ direct }) => (direct === "fa" ? "auto" : "null")};
`;
