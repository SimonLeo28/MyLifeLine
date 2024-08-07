import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Login from './Login';

const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    <div className="flex-col bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
        <h1 className="p-3 text-black font-bold text-5xl">Welcome to My LifeLine</h1>
        <p className='text-black text-2xl font-bold p-3'>The stations of your life</p>
        <Link to={"/Login"}>
        <button className='bg-black rounded-[10%] text-white p-3'>Login to continue</button>
        </Link>
      </div>
    <Footer/>
    </div>
    </>
  );
};

export default Home;
