import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import routes from "./Routes";
import SideBar from "./SideBar/Sidebar";
import colors from "../Styles/Varibles";
import { Row, Col } from "react-bootstrap";

function App() {
   const router = useRoutes(routes);

   return (
      <AppWrapper>
         <Row>
            <Col md={4}>
               <SideBar />
            </Col>

            <Col md={8}>{router}</Col>
         </Row>
      </AppWrapper>
   );
}

const AppWrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: ${colors.mainColor};
`;

export default App;
