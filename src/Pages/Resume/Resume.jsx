import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import ResumeItem from '../../Components/ResumeItem/ResumeItem';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import colors from '../../Styles/Varibles';
import { SiCheckmarx } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export default function Resume() {
   const { t } = useTranslation();

   return (
      <ResumeWrapper>
         <SectionTitle>{t('resume')}</SectionTitle>
         <Title>{t('mainSkills')}</Title>
         <Row>
            <ResumeItem skill={'Html'} percent={'95'} prog={'95'} />
            <ResumeItem skill={'Css'} percent={'95'} prog={'95'} />
            <ResumeItem skill={'Javascript'} percent={'90'} prog={'90'} />
            <ResumeItem skill={'Es6 , Es7 , Es8...'} percent={'90'} prog={'90'} />
            <ResumeItem skill={'React'} percent={'90'} prog={'90'} />
            <ResumeItem skill={'Redux'} percent={'95'} prog={'95'} />
         </Row>

         <Title>{t('otherSkills')}</Title>

         <List>
            <Row>
               <Item sm={6}>
                  <Icon /> Stlyed components , Axios , Formik , Yup ...
               </Item>
               <Item sm={6}>
                  <Icon /> Bootstrap , React-bootstrap , Material UI , Tailwind
               </Item>
               <Item sm={6}>
                  <Icon /> Npm , Yarn , Git , Github , Regex
               </Item>
               <Item sm={6}>
                  <Icon /> Websocket , Socket.Io
               </Item>
               <Item sm={6}>
                  <Icon /> EsLint , Prettier , SEO
               </Item>
               <Item sm={6}>
                  <Icon /> Above average english
               </Item>
            </Row>
         </List>
      </ResumeWrapper>
   );
}

const ResumeWrapper = styled.section`
   margin-top: 5rem;
   padding: 0 4.5rem 0 3rem;

   .row {
      margin-bottom: 8rem;
   }
`;

const Title = styled.h2`
   width: fit-content;
   border-bottom: 0.1rem solid ${colors.hover};
   margin: 3rem auto;
   text-shadow: 0px 4px 5px ${colors.hover};
   border-radius: 0.5rem;
`;

const List = styled.ul``;

const Item = styled(Col)`
   margin-bottom: 2.5rem;
`;

const Icon = styled(SiCheckmarx)`
   color: ${colors.hover};
   margin-right: 1rem;
`;
