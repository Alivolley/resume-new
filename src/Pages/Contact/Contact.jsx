import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import ContactItme from "../../Components/ContactItme/ContactItme";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { SiGithub, SiGmail, SiInstagram, SiTelegram, SiWhatsapp } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaUserAstronaut } from "react-icons/fa";

export default function Contact() {
   return (
      <ContactWrapper>
         <SectionTitle>Contact</SectionTitle>
         <Title>
            <FaUserAstronaut /> There is some ways that you can be in touch with me :
         </Title>
         <Row>
            <ContactItme firstIcon={<SiTelegram />} social={"Telegram : "} title={"@Alivolley"} />
            <ContactItme firstIcon={<SiWhatsapp />} social={"Whatsapp : "} title={"wa.link/j2zuz4"} />
            <ContactItme firstIcon={<SiInstagram />} social={"Instagram : "} title={"ali_azghandi8"} />
            <ContactItme firstIcon={<SiGithub />} social={"Github : "} title={"Alivolley"} />
            <ContactItme firstIcon={<SiGmail />} social={"Gmail : "} title={"alicryptovolley@gmail.com"} />
            <ContactItme firstIcon={<FiPhoneCall />} social={"PhoneCall : "} title={"09383935719"} />
         </Row>
      </ContactWrapper>
   );
}

const ContactWrapper = styled.section`
   margin-top: 10rem;
   padding: 3rem;
`;

const Title = styled.h2`
   margin-top: 7rem;
   margin-bottom: 7rem;
`;
