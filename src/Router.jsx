import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Log In/Login";
import Home from "./Home/Home";
import Services from "./Home/Services";
import Footer from "./Home/Footer";
import Signup from "./SignUp/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home></Home> ,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        }
      ]
    },
  ]);
  export default router;