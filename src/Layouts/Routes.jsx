import Home from "../Pages/Home/Home";
import Portfolio from "../Pages/Portfolio/Portfolio";
import About from "../Pages/About/About";
import Resume from "../Pages/Resume/Resume";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";

const routes = [
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/about",
      element: <About />,
   },
   {
      path: "/resume",
      element: <Resume />,
   },
   {
      path: "/portfolio",
      element: <Portfolio />,
   },
   {
      path: "/services",
      element: <Services />,
   },
   {
      path: "/contact",
      element: <Contact />,
   },
];

export default routes;
