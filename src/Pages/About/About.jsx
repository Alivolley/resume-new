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

export default function About() {
   return (
      <AboutWrapper>
         <SectionTitle>About</SectionTitle>
         <Describtion>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sunt maiores quisquam tempora quo recusandae consequuntur animi incidunt, neque quis
            molestiae magni nisi a quos consectetur magnam excepturi porro architecto eos eaque corporis ea aut! Quod impedit accusamus quae assumenda est reprehenderit,
            aut repellendus earum officiis, nostrum minima libero blanditiis.
         </Describtion>
         <Title>Frontend-Developer</Title>
         <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nesciunt.</Text>

         <Infos>
            <Row>
               <AboutItem quest={`Age : `} res={`23`} icon={<IoCalendarNumberOutline />} />
               <AboutItem quest={`Marriage status : `} res={`Single`} icon={<TbUsers />} />
               <AboutItem quest={`Military service status : `} res={`Done`} icon={<GiRank3 />} />
               <AboutItem quest={`Type of partnership : `} res={`Remote`} icon={<FaRegHandshake />} />
               <AboutItem quest={`City : `} res={`Kermanshah`} icon={<GiModernCity />} />
               <AboutItem quest={`Exprience : `} res={`1 Year`} icon={<GrWorkshop />} />
            </Row>
         </Infos>
      </AboutWrapper>
   );
}

const AboutWrapper = styled.section`
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
