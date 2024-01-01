import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import colors from '../../Styles/Varibles';

export default function ContactItme({ firstIcon, social, title, goTo, colorKey }) {
   return (
      <Col lg={6}>
         {social.includes('PhoneCall') ? (
            <Div>
               <Icon color={colorKey}>{firstIcon}</Icon>
               <Label>{social}</Label>
               <Response>{title}</Response>
            </Div>
         ) : (
            <ContactItmeWrapper href={goTo}>
               <Icon color={colorKey}>{firstIcon}</Icon>
               <Label>{social}</Label>
               <Response>{title}</Response>
            </ContactItmeWrapper>
         )}
      </Col>
   );
}

const ContactItmeWrapper = styled.a.attrs({ target: '_blank' })`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-bottom: 3rem;
   cursor: pointer;
`;

const Div = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   margin-bottom: 3rem;
`;

const Icon = styled.div`
   font-size: 2.2rem;
   cursor: pointer;

   @media (max-width: 992px) {
      font-size: 1.7rem;
   }

   color: ${({ color }) =>
      color === 'telegram'
         ? colors.hover
         : color === 'whatsapp'
         ? 'green'
         : color === 'instagram'
         ? 'purple'
         : color === 'github'
         ? colors.primary
         : color === 'gmail'
         ? '#E34133'
         : color === 'phoneCall'
         ? '#0145A8'
         : 'black'};
`;

const Label = styled.label`
   font-weight: 700;
   font-size: 2rem;
   cursor: pointer;
   color: black;

   @media (max-width: 992px) {
      font-size: 1.5rem;
   }
`;

const Response = styled.label`
   font-size: 2rem;
   cursor: pointer;
   color: black;

   @media (max-width: 992px) {
      font-size: 1.4rem;
   }
`;
