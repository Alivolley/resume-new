import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsCollection, BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import colors from "../../Styles/Varibles";

export default function SideBarLinks() {
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
         <LinkItem to="/services">
            <FaCodepen />
            <p>Services</p>
         </LinkItem>
         <LinkItem to="/contact">
            <MdContactPhone />
            <p>Contact</p>
         </LinkItem>
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
      padding-bottom: 1rem;
      border-bottom-right-radius: 2rem;

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

   &:hover {
      color: ${colors.hover};
   }

   p {
      font-size: 1.6rem;
   }
`;
