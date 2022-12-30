import React from "react";
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import colors from "../../Styles/Varibles";

export default function PortfolioItem({ source, explain, goTo }) {
   const { t } = useTranslation();

   return (
      <PortfolioItemWrapper sm={4}>
         <Item href={goTo}>
            <Image src={source} />

            <Describtion>
               <Text>{explain}</Text>
               <Button>{t("view")}</Button>
            </Describtion>
         </Item>
      </PortfolioItemWrapper>
   );
}

const PortfolioItemWrapper = styled(Col)`
   margin-top: 1.5rem !important;
`;

const Item = styled.a.attrs({ target: "_blank" })`
   display: flex;
   flex-direction: column;
   cursor: pointer;
   box-shadow: 0px 0px 5px 1px ${colors.hover};
   padding: 1.5rem;
`;

const Image = styled.img`
   width: 100%;
   max-width: 20rem;
   height: 10rem;
   display: block;
   margin: 0 auto;
`;

const Describtion = styled.div``;

const Text = styled.p`
   font-size: 1.4rem;
   color: black;
   padding: 1.5rem 0;
   height: 12rem;
   display: -webkit-box;
   -webkit-line-clamp: 5;
   -webkit-box-orient: vertical;
   overflow: hidden;
`;

const Button = styled.button`
   border: none;
   border-radius: 1rem;
   font-size: 1.2rem;
   padding: 0.5rem 2rem 0.2rem 2rem;
   background-color: ${colors.hover};
   color: ${colors.mainColor};
`;
