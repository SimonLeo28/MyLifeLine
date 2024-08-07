import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Journal from './pages/Journal.jsx';
import CreateJournal from './pages/CreateJournal.jsx';
import SingleJournal from './pages/SingleJournal.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsAndConditions from './pages/TermsAndConditions.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import ResetPassword from './pages/ResetPassword.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/journal/:id",
    element: <SingleJournal/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path:"/Contact",
    element: <Contact/>,
  },
  {
    path:"/Login",
    element: <Login/>,
  },
  {
    path:"/Register",
    element: <Register/>,
  },
  {
    path: "/Journal",
    element: <Journal/>,
  },
  {
    path:"/Create-Journal",
    element: <CreateJournal/>,
  },
  {
    path:"/Privacy-Policy",
    element: <PrivacyPolicy/>,
  },
  {
    path:"/Terms-And-Conditions",
    element: <TermsAndConditions/>,
  },
  {
    path:"/Forgot-Password",
    element: <ForgotPassword/>,
  },
  {
    path:"/reset/:token",
    element: <ResetPassword/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider> 
)
