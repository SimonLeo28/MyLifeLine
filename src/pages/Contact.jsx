import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

const backend = import.meta.env.VITE_BACKEND_URL

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const sendData = async (Name,Email,Content)=>{
    try {
      const response = await axios.post(`${backend}/contacts/`,{
        Name:Name,
        Email:Email,
        Message:Message,
      })
      toast.success("Message sent successfully...")
      return response
    }
    catch(error){
      console.log(error);
      toast.error("Oops Problem!!!")
      setIsError(true)
    }
  }

  const [Name,setName] = useState("")
  const [Email,setEmail] = useState("")
  const [Message,setMessage] = useState("")
  const [isError,setIsError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Name.length === 0 || Email.length === 0 || Message.length === 0) {
      toast.error("Please enter all the details.");
    } else {
      await sendData(Name, Email, Message);
    }
  };
  return (
    <>
    <Navbar/>
    <div className="flex-col bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
    <div className="flex justify-center items-center w-[50%] ">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl mb-6 text-center">Write to us</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            value={Name}
            onChange={(e)=>{
              console.log(e.target.value)
              setName(e.target.value)
            }} 
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            value={Email}
            onChange={(e)=>{
              console.log(e.target.value)
              setEmail(e.target.value)
            }}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
            id="message"
            name="message"
            rows="5"
            value={Message}
            onChange={(e)=>{
              console.log(e.target.value)
              setMessage(e.target.value)
            }}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button onClick={()=>{
            const Name = document.getElementById("name").value
            const Email = document.getElementById("email").value
            const Message = document.getElementById("message").value

            if(Name.length === 0 || Email.length === 0 || Message.length === 0)
            {
              toast("Please enter all the details.")
            }
            else {
              console.log("Data sent")
            }
            console.log(Name)
            console.log(Email)
            console.log(Message)
          }}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    </div>
    <Footer/>
    <ToastContainer/>
    </>
  )
}


export default Contact
