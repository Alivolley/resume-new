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
   margin-top: 2.5rem;
   padding: 0 5rem;
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
