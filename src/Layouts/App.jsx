import { useLocation, useRoutes } from "react-router-dom";
import styled from "styled-components";
import routes from "./Routes";
import SideBar from "../Components/SideBar/Sidebar";
import colors from "../Styles/Varibles";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgCloseR } from "react-icons/cg";

function App() {
   const router = useRoutes(routes);
   const [showSideBar, setShowSideBar] = useState(false);
   const location = useLocation();

   useEffect(() => {
      setShowSideBar(false);
   }, [location]);

   return (
      <AppWrapper>
         <Row>
            <ColApp sm={5} md={4} lg={3} show={showSideBar ? 1 : 0}>
               <SideBar />
            </ColApp>

            <Col sm={7} md={8} lg={9}>
               {router}
            </Col>
         </Row>

         <ToggleButton onClick={() => setShowSideBar((prev) => !prev)}>{showSideBar ? <CgCloseR /> : <AiOutlineMenu />}</ToggleButton>
      </AppWrapper>
   );
}

const AppWrapper = styled.div`
   @media (min-width: 576px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${colors.mainColor};

      .row {
         height: 100%;
      }
   }
`;

const ColApp = styled(Col)`
   @media (max-width: 576px) {
      position: fixed;
      z-index: 2;
      transition: all 0.2s;
      right: ${({ show }) => (show ? 0 : "100%")};
   }
`;

const ToggleButton = styled.div`
   width: 4rem;
   height: 4rem;
   background-color: ${colors.hover};
   border-radius: 50%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   right: 1.5rem;
   top: 1.5rem;
   cursor: pointer;
   z-index: 3;
   font-size: 2rem;

   @media (min-width: 576px) {
      display: none;
   }
`;

export default App;
