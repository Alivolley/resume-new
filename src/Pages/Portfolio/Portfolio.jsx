import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";
import Alert from "react-bootstrap/Alert";
import PortfolioItem from "../../Components/PortfolioItem/PortfolioItem";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import insta from "./../../assets/Images/insta.png";
import music from "./../../assets/Images/music.png";
import furniture from "./../../assets/Images/furniture.png";
import portfo from "./../../assets/Images/portfo.png";
import camp from "./../../assets/Images/camp.png";

export default function Portfolio() {
   return (
      <PortfolioWrapper>
         <SectionTitle>Portfolio</SectionTitle>
         <AlertCustom variant={"danger"}>
            <Title>
               For visiting these sites use <span>vpn</span> and this info :
            </Title>
            <div>
               <p>username : ali</p>
               <p>email : ali@gmail.com</p>
               <p>password : 1234</p>
            </div>
         </AlertCustom>

         <Row>
            <PortfolioItem
               source={insta}
               explain={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus qui atque, accusantium quasi repudiandae harum ea laboriosam magni facilis, ab nobis rem earum dicta sint distinctio iusto hic officiis!"
               }
               goTo={"https://instagram-project-kohl.vercel.app/"}
            />
            <PortfolioItem
               source={music}
               explain={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus qui atque, accusantium quasi repudiandae harum ea laboriosam magni facilis, ab nobis rem earum dicta sint distinctio iusto hic officiis!"
               }
               goTo={"https://music8.netlify.app/"}
            />
            <PortfolioItem
               source={furniture}
               explain={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus qui atque, accusantium quasi repudiandae harum ea laboriosam magni facilis, ab nobis rem earum dicta sint distinctio iusto hic officiis!"
               }
               goTo={"https://forniture-opal.vercel.app/"}
            />
            <PortfolioItem
               source={portfo}
               explain={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus qui atque, accusantium quasi repudiandae harum ea laboriosam magni facilis, ab nobis rem earum dicta sint distinctio iusto hic officiis!"
               }
               goTo={"https://landing8.netlify.app/"}
            />
            <PortfolioItem
               source={camp}
               explain={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus doloribus qui atque, accusantium quasi repudiandae harum ea laboriosam magni facilis, ab nobis rem earum dicta sint distinctio iusto hic officiis!"
               }
               goTo={"https://camping8.netlify.app/"}
            />
         </Row>
      </PortfolioWrapper>
   );
}

const PortfolioWrapper = styled.section`
   margin-top: 2rem;
   padding: 0 3rem;
`;

const AlertCustom = styled(Alert)`
   display: flex;
   flex-direction: column;
   margin-bottom: 0;

   div {
      display: flex;
      gap: 5rem;
   }
`;

const Title = styled.p`
   margin-bottom: 1.5rem;

   span {
      font-weight: 700;
      font-size: 1.8rem;
      text-decoration: underline;
   }
`;
