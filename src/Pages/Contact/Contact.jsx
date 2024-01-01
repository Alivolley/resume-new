import React from 'react';
import { Row } from 'react-bootstrap';
import styled from 'styled-components';
import ContactItme from '../../Components/ContactItme/ContactItme';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { SiGithub, SiGmail, SiInstagram, SiTelegram, SiWhatsapp } from 'react-icons/si';
import { FiPhoneCall } from 'react-icons/fi';
import { FaUserAstronaut } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';

export default function Contact() {
   const { t, i18n } = useTranslation();

   return (
      <ContactWrapper direct={i18n.language}>
         <SectionTitle>{t('contact')}</SectionTitle>
         <Title>
            <FaUserAstronaut />
            {t('contactText')}
         </Title>
         <Row>
            <ContactItme
               firstIcon={<SiTelegram />}
               social={t('telegram') + ' : '}
               title={'@Alivolley'}
               goTo="https://t.me/Alivolley"
               colorKey="telegram"
            />
            <ContactItme
               firstIcon={<SiWhatsapp />}
               social={t('whatsapp') + ' : '}
               title={'wa.link/j2zuz4'}
               goTo="https://wa.link/j2zuz4"
               colorKey="whatsapp"
            />
            <ContactItme
               firstIcon={<SiInstagram />}
               social={t('instagram') + ' : '}
               title={'ali_azghandi8'}
               goTo="https://www.instagram.com/ali_azghandi8/"
               colorKey="instagram"
            />
            <ContactItme
               firstIcon={<SiGithub />}
               social={t('github') + ' : '}
               title={'Alivolley'}
               goTo="https://github.com/Alivolley"
               colorKey="github"
            />
            <ContactItme
               firstIcon={<SiGmail />}
               social={t('gmail') + ' : '}
               title={'alicryptovolley@gmail.com'}
               goTo="mailto:alicryptovolley@gmail.com"
               colorKey="gmail"
            />
            <ContactItme
               firstIcon={<FiPhoneCall />}
               social={t('phoneCall') + ' : '}
               title={'09383935719'}
               goTo="tel:09383935719"
               colorKey="phoneCall"
            />
            <ContactItme
               firstIcon={<FaLinkedin />}
               social={t('linkedin') + ' : '}
               title={'ali-azghandi-91781a27a'}
               goTo="https://www.linkedin.com/in/ali-azghandi-91781a27a/"
               colorKey="phoneCall"
            />
         </Row>
      </ContactWrapper>
   );
}

const ContactWrapper = styled.section`
   direction: ${({ direct }) => (direct === 'fa' ? 'rtl' : 'ltr')};
   margin-top: 10rem;
   padding: 3rem;

   @media (max-width: 992px) {
      margin-top: 2rem;
   }
`;

const Title = styled.h2`
   margin-top: 7rem;
   margin-bottom: 7rem;
`;
