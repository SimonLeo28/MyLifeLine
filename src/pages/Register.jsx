import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const backend = import.meta.env.VITE_BACKEND_URL

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//const backend = import.meta.env.VITE_BACKEND_URL


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${backend}/signup`, {
        email,
        password,
      });
      navigate('/login');
      toast.success("User registered successfully...");
    } catch (error) {
      console.error("There was an error signing up!", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex flex-col bg-hero-pattern bg-cover bg-center h-screen gap-3'>
        <center>
          <div className='mt-[10%] flex justify-center items-center w-[50%]'>
            <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleRegister}>
              <h2 className="text-2xl mb-6 text-center">Register</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button className='bg-orange-300 rounded px-4 py-2' type="submit">Register</button>
              <p>Already have an account? <a className='font-bold' href="./Login">Login Here!!!</a></p>
            </form>
          </div>
        </center>
      </div>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default Register;
