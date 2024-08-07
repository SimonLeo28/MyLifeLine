import React, { useState } from 'react';import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import Journal from './Journal';
import { Link } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await axios.post(`${backend}/login/`, { email, password });
      
      const token = response.data.token;
      localStorage.setItem('authToken', token); // Store token

      console.log("Login Successful");
      navigate('/Journal')

      
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
      toast.error("Wrong password!!!")
    }
  };
  return (
    <>
      <Navbar />
      <div className='flex flex-col bg-hero-pattern bg-cover bg-center h-screen gap-3'>
        <center>
          <div className='mt-[10%] flex justify-center items-center w-[50%]'>
            <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleLogin}>
              <h2 className="text-2xl mb-6 text-center">Login</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  type="text"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <button className='bg-orange-300 rounded px-4 py-2' type="submit">Login</button>
              <p><Link to={"/Forgot-Password"} className='text-[#4158A6]'>Forgot Password!!!</Link></p>
              <p>Are you a new one here? <a className='font-bold' href="./Register">Register Here!!!</a></p>
            </form>
          </div>
        </center>
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default Login;

