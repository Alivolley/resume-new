import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import routes from "./Routes";
import SideBar from "../Components/SideBar/Sidebar";
import colors from "../Styles/Varibles";
import { Row, Col } from "react-bootstrap";

function App() {
   const router = useRoutes(routes);

   return (
      <AppWrapper>
         <Row>
            <Col sm={5} md={4} lg={3}>
               <SideBar />
            </Col>

            <Col sm={7} md={8} lg={9}>
               {router}
            </Col>
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

   .row {
      height: 100%;
   }
`;

export default App;
