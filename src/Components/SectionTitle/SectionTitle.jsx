import React from "react";
import styled from "styled-components";
import colors from "../../Styles/Varibles";

export default function SectionTitle({ children }) {
   return <SectionTitleWrapper>{children}</SectionTitleWrapper>;
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
`;
