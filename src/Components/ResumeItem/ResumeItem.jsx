import React from "react";
import { Col, ProgressBar } from "react-bootstrap";
import styled from "styled-components";

export default function ResumeItem({ skill, percent, prog }) {
   return (
      <ResumeItemWrapper sm={6}>
         <Titles>
            <Skill>{skill}</Skill>
            <Percent>{percent}%</Percent>
         </Titles>
         <Progress now={prog} />
      </ResumeItemWrapper>
   );
}

const ResumeItemWrapper = styled(Col)`
   @media (min-width: 280px) {
      margin-top: 1rem !important;
   }

   @media (min-width: 1000px) {
      padding: 0 5rem !important;
   }
`;

const Titles = styled.div`
   display: flex;
   justify-content: space-between;
`;

const Skill = styled.p``;

const Percent = styled.p`
   font-size: 1.2rem;
`;

const Progress = styled(ProgressBar)`
   background-color: #b9b9b9;
`;
