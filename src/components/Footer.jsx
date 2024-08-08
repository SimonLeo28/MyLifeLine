import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-custom-yellow py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-700">© 2024 Company. All rights reserved.</p>
        <div className="mt-2">
        <Link to={"https://drive.google.com/file/d/1cr3WaG4IwUpIAQ9Fwrv5MVLKnABFb2gx/view?usp=drive_link"}><a href="#" className="text-gray-700 hover:text-gray-900 mx-2">Privacy Policy</a></Link>
        <Link to={"https://drive.google.com/file/d/11s1ovcmVojH7zLTIuOMToGt3a_rmciNo/view?usp=drive_link"}><a href="#" className="text-gray-700 hover:text-gray-900 mx-2">Terms and Conditions</a></Link>
        <Link to={"/Contact"}><a href="#" className="text-gray-700 hover:text-gray-900 mx-2">Contact Us</a></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
