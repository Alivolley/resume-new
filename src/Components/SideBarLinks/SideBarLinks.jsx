import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsCollection, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { MdContactPhone, MdLanguage } from "react-icons/md";
import colors from "../../Styles/Varibles";
import { useTranslation } from "react-i18next";

export default function SideBarLinks() {
   const { t, i18n } = useTranslation();
   const navigation = useNavigate();

   const changeLanguge = () => {
      if (i18n.language === "en") {
         i18n.changeLanguage("fa");
         localStorage.setItem("lang", "fa");
         navigation(0);
      } else {
         i18n.changeLanguage("en");
         localStorage.setItem("lang", "en");
         navigation(0);
      }
   };

   return (
      <SideBarLinksWrapper>
         <LinkItem to="/">
            <AiOutlineHome />
            <p>Home</p>
         </LinkItem>
         <LinkItem to="/about">
            <AiOutlineUser />
            <p>About</p>
         </LinkItem>
         <LinkItem to="/resume">
            <BsFillFileEarmarkPostFill />
            <p>Resume</p>
         </LinkItem>
         <LinkItem to="/portfolio">
            <BsCollection />
            <p>Portfolio</p>
         </LinkItem>
         <LinkItem to="/contact">
            <MdContactPhone />
            <p>Contact</p>
         </LinkItem>
         <ChangeLanguge onClick={changeLanguge}>
            <MdLanguage />
            <p>{i18n.language === "fa" ? "English" : "فارسی"}</p>
         </ChangeLanguge>
      </SideBarLinksWrapper>
   );
}

const SideBarLinksWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 3rem;
   padding: 1.5rem;
   margin-top: 3rem;

   .active {
      color: ${colors.hover};
      font-size: 3rem;
      border-bottom: 0.2rem solid ${colors.hover};
      padding-bottom: 0.5rem;
      border-bottom-right-radius: 0.5rem;

      p {
         color: ${colors.mainColor};
      }
   }
`;

const LinkItem = styled(NavLink)`
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 2.2rem;
   color: ${colors.mainColor};
   transition: all 0.15s;
   width: fit-content;
   padding: 0 1.5rem 0 0.5rem;

   &:hover {
      color: ${colors.hover};
   }

   p {
      font-size: 1.6rem;
   }
`;

const ChangeLanguge = styled.button`
   background-color: transparent;
   border: none;
   display: flex;
   align-items: center;
   gap: 1rem;
   font-size: 2.2rem;
   color: ${colors.mainColor};
   transition: all 0.15s;
   width: fit-content;
   padding: 0 1.5rem 0 0.5rem;

   &:hover {
      color: ${colors.hover};
   }

   p {
      font-size: 1.6rem;
   }
`;
