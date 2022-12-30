import React from "react";
import styled from "styled-components";
import colors from "../../Styles/Varibles";
import first from "./../../assets/Images/first.png";
import { GrInstagram } from "react-icons/gr";
import { SiGmail } from "react-icons/si";
import { BsGithub, BsWhatsapp, BsTelegram } from "react-icons/bs";
import SideBarLinks from "../SideBarLinks/SideBarLinks";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
   const { t } = useTranslation();

   return (
      <SideBarWrapper>
         <Image src={first} alt="Ali Azghandi" />
         <Title>{t("name")}</Title>

         <SocialMediaIcons>
            <SocialMediaLinksIcon href="https://t.me/Alivolley">
               <BsTelegram />
            </SocialMediaLinksIcon>
            <SocialMediaLinksIcon href="https://wa.link/j2zuz4">
               <BsWhatsapp />
            </SocialMediaLinksIcon>
            <SocialMediaLinksIcon href="https://www.instagram.com/ali_azghandi8/">
               <GrInstagram />
            </SocialMediaLinksIcon>
            <SocialMediaLinksIcon href="https://github.com/Alivolley">
               <BsGithub />
            </SocialMediaLinksIcon>
            <SocialMediaLinksIcon href="mailto:alicryptovolley@gmail.com">
               <SiGmail />
            </SocialMediaLinksIcon>
         </SocialMediaIcons>

         <SideBarLinks />
      </SideBarWrapper>
   );
}

const SideBarWrapper = styled.section`
   height: 100%;
   background-color: ${colors.primary};
   padding: 1.5rem;
`;

const Image = styled.img`
   width: 15rem;
   height: 15rem;
   display: block;
   margin: 0 auto;
   border-radius: 50%;
   border: 0.5rem solid ${colors.secondary};
`;

const Title = styled.h1`
   color: white;
   text-align: center;
   font-weight: 700;
   font-size: 2.6rem;
   margin-top: 2rem;
`;

const SocialMediaIcons = styled.div`
   display: flex;
   justify-content: space-around;
   margin-top: 2rem;
   padding: 0 1.5rem;
`;

const SocialMediaLinksIcon = styled.a.attrs({ target: "_blank" })`
   font-size: 1.8rem;
   color: white;
   background-color: ${colors.secondary};
   border-radius: 50%;
   width: 3.5rem;
   height: 3.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: all 0.15s;

   &:hover {
      color: ${colors.hover};
      background-color: ${colors.mainColor};
   }
`;
